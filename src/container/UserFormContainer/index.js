import React, { Component } from 'react';
import { Item, Input, Form, Thumbnail,
          Container, Content,
          Button, Text, View } from "native-base";
import { Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderContainer from './../HeaderContainer';
import { connect } from "react-redux";
import { post, urlRequest } from './../../Request';
import { carregaUsuario } from "./../LoginContainer/actions";

class UserForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
          id: this.props.usuario.id,
          nome: this.props.usuario.nome,
          email: this.props.usuario.email,
          cargo: this.props.usuario.cargo,
          foto: this.props.usuario.foto
    }
  }

  updateUser() {
    // Atualiza informações do usuário
    post('updateuser.php',
      (res) => {
        Alert.alert('Tudo certo!', 'Dados salvos com sucesso', [{text: 'OK', onPress: () => {
          this.props.carregaUsuario(res.data);
          this.props.navigation.navigate('Home');
          } }]);
      },
      (err) => {
        Alert.alert('Erro no servidor','Erro ao salvar usuário');
      },
      {
        id: this.state.id,
        nome: this.state.nome,
        email: this.state.email,
        cargo: this.state.cargo,
        foto: this.state.foto
      }
    );
  }

  render() {
		return (
      <Container>
			<HeaderContainer titulo={'EDIÇÃO DO USUÁRIO'} navigation={this.props.navigation} />
        <Content>
        <Form>
        <Item>
          <Icon name="user" />
          <Input
            placeholder='Nome Completo'
            onChangeText={(nome) => {
                this.setState({nome})
            }}
            value={ this.state.nome } />
        </Item>
        <Item>
          <Icon name="envelope" />
          <Input
            placeholder='Email'
            onChangeText={(email) => {
                this.setState({email})
            }}
            value={ this.state.email }/>
        </Item>
        <Item>
          <Icon name="user" />
          <Input
            placeholder='Cargo'
            onChangeText={(cargo) => {
                this.setState({cargo})
            }}
            value={ this.state.cargo }/>
        </Item>
        </Form>
          <Content padder>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Thumbnail square large source={{ uri: urlRequest +  this.state.foto }}  />
            </View>
          </Content>
          <View padder>
            <Button block onPress={() => this.updateUser() }>
              <Text>Atualizar</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
	}
}
function bindAction(dispatch) {
	return {
    carregaUsuario: usuario => dispatch(carregaUsuario(usuario)),
	};
}
const mapStateToProps = state => ({
  usuario: state.loginreducer.usuario
});
export default connect(mapStateToProps, bindAction)(UserForm);
