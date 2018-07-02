import * as React from "react";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from "../App";

export default class Setup extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false }))
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}
