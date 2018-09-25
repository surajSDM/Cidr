import React, { Component } from "react";
// import PropTypes from "prop-types";
import { View, StyleSheet, KeyboardAvoidingView, Image } from "react-native";
import { connect } from "react-redux";
import * as appActions from "../actions";
import Constants from "../constants";
import LoginForm from "./../components/LoginForm";

// this is a traditional React component connected to the redux store
class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log("appActions", appActions);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={Constants.Images.login.logo} />
        </View>
        <View style={styles.formContainer}>
          <LoginForm onLoginPress={this.onLoginPress} />
        </View>
      </KeyboardAvoidingView>
    );
  }

  onLoginPress = () => {
    this.props.dispatch(appActions.movedashBoardTab());
    // this.props.dispatch(appActions.registeration());
  };

  onShowModalPress() {
    this.props.navigator.showModal({
      screen: "example.LoginScreen",
      title: "Login",
      passProps: {
        str: "This is a prop passed in 'startSingleScreenApp()'!",
        obj: {
          str: "This is a prop passed in an object!",
          arr: [
            {
              str: "This is a prop in an object in an array in an object!"
            }
          ],
          arr2: [["array of strings", "with two strings"], [1, 2, 3]]
        },
        num: 1234
      }
    });
  }
}

export default connect(
  null,
  null
)(LoginScreen);

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50"
  },
  loginContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    position: "absolute",
    width: 300,
    height: 100
  },
  title: {
    color: "#FFF",
    marginTop: 120,
    width: 180,
    textAlign: "center",
    opacity: 0.9
  }
});
