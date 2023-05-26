import React, { Component } from "react";
import StackNavigator from "./stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { firebaseConfig } from "./config";
import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

let customFonts = {
  "Bubblegum-Sans": require("./assets/BubblegumSans-Regular.ttf"),
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoade: false,
    };
  }

  loadFont = async () => {
    await Font.loadAsync(customFonts);
    this.setState({ fontLoade: true });
  };
  componentDidMount() {
   // this.loadFont();
   console.log("o codigo passou por aqui :D")
  }
  render() {
  
      return (
        <NavigationContainer>
          <StackNavigator></StackNavigator>
        </NavigationContainer>
      );
    
    return null
  }
}
