import * as React from "react";
import { Item, Input, Icon, Toast, Form,
          Container, Content, Header, Body, ListItem,
          Title, Button, CheckBox, Text, View, Footer } from "native-base";
import { AsyncStorage, Image, Alert, StatusBar } from 'react-native';
import { Field, reduxForm, formValueSelector } from "redux-form";
import DialogProgress from 'react-native-dialog-progress';
import { connect } from "react-redux";
import { carregaUsuario } from "./actions";
import { post, getApi } from "../../Request";
import axios from 'axios';

const options = {
        message:"Carregando...",
        isCancelable:true
}

const logo = require('./../../../images/logofoxtraderx.png');
class LoginForm extends React.Component<Props, State> {

  componentDidMount() {
    //console.disableYellowBox = true;
  }

  async omponentWillMount() {
    console.log('chegou aqui');
    const usersave = await AsyncStorage.getItem('@user:key');
    if(usersave) {
      console.log(usersave);
    } else {
      console.log('user not saved');
    }
  }

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      usuario: '',
      senha: '',
      errorusuario: false,
      errorsenha: false,
      usuarioplaceholder: 'Usuário',
      senhaplaceholder: 'Senha',
      placeholdercolor: '#c2c2c2',
      checked: false,
      loginCompleto: {}
    };
  }

  validationForm() {
    this.setState({ errorusuario: (this.state.usuario === ''), usuarioplaceholder: (this.state.usuario === '')?'Campo obrigatório':'Usuário' });
    this.setState({ errorsenha: (this.state.senha === ''), senhaplaceholder: (this.state.senha === '')?'Campo obrigatório':'Senha' });
    if(this.state.usuario !== '' && this.state.senha !== '') {
      if(this.state.checked) {
        AsyncStorage.setItem('@user:key', this.state.usuario);
        AsyncStorage.setItem('@pws:key', this.state.senha);
        alert('dados salvos');
      } else {
        AsyncStorage.setItem('@user:key', '');
        AsyncStorage.setItem('@pws:key', '');
        alert('tudo limpo');
      }
    	/* DialogProgress.show(options);
        post('qloginfull.php',
          (res) => {
            switch (res.data.result) {
              case 'erroversao':
                Alert.alert('Erro Versão', 'Você não está com a versão mais atual do app');
              break;
              case 'erronaoexiste':
                Alert.alert('Erro Usuário', 'Você ainda não está cadastrado em nosso sistema');
              break;
              case 'errologin':
                Alert.alert('Erro Usuário', 'Você ainda não está cadastrado em nosso sistema');
              break;
              case 'erroadesao':
                Alert.alert('Erro Usuário', 'Você ainda não ativou sua conta ' + res.data.nome);
              break;
              case 'ok':
                this.props.carregaUsuario(res.data);
                this.props.navigation.navigate('Home');
                //console.log(this.props.usuario);
              break;
              default:
              Alert.alert('Erro Inesperado', 'Verifique sua conexão com a internet');
            }
           	DialogProgress.hide();
          },
          (error) => {
            console.log(error);
            DialogProgress.hide();
            Alert.alert("Erro no servidor de acesso.");
          },
          {
            usuario: this.state.usuario,
            senha: this.state.senha,
            versao: 2
          }); */
        }
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#3a3a3a'}}>
        <StatusBar hidden />
				<Header style={{ height: 200, backgroundColor: 'black' }}>
					<Body style={{ alignItems: "center", backgroundColor: 'black' }}>
              <Image source={logo} style={{ width: 320, height: 60 }} />
					</Body>
				</Header>
				<Content>
        <Form>
        <Item error={ this.state.errorusuario }>
          <Icon name="person" style={{ color: '#afafaf' }} />
          <Input
              style={{ color: '#fff' }}
              placeholder={this.state.usuarioplaceholder}
              placeholderTextColor={this.state.placeholdercolor}
              onChangeText={(usuario) => {
                  this.setState({usuario, usuarioplaceholder: 'Usuário'})
              }}
              value={this.state.usuario} />
        </Item>
        <Item error={ this.state.errorsenha }>
          <Icon name="lock" style={{ color: '#afafaf' }}  />
          <Input
              style={{ color: '#fff' }}
              placeholder={this.state.senhaplaceholder}
              placeholderTextColor={this.state.placeholdercolor}
              onChangeText={(senha) => {
                this.setState({senha, senhaplaceholder: 'Senha'})
              }}
              value={this.state.senha} secureTextEntry />
        </Item>
        </Form>
					<View padder>
						<Button danger block onPress={() => this.validationForm()}>
							<Text>ACESSAR</Text>
						</Button>
					</View>
          <View style={{ flexDirection: 'row', justifyContent: "center" }} >
              <CheckBox
                 color="#afafaf" onPress={() => {
                  this.setState({ checked: !this.state.checked })
                }} checked={this.state.checked} />
              <Text>    </Text>
              <Text style={{ color: '#afafaf' }}>Salvar dados de acesso</Text>
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
export default connect(mapStateToProps, bindAction)(LoginForm);
