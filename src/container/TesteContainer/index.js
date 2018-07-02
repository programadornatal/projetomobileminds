import React, { Component } from 'react';
import { Container, Content, Text } from "native-base";
import HeaderContainer from './../HeaderContainer';
import { connect } from "react-redux";
class TesteContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }
  render() {
		return (
      <Container>
			    <HeaderContainer titulo={'TESTES'} navigation={ this.props.navigation } />
          <Content>
            <Text>Pagina de testes</Text>
          </Content>
      </Container>
    );
	}
}

const mapStateToProps = state => ({
  usuario: state.loginreducer.usuario
});
export default connect(mapStateToProps, null)(TesteContainer);
