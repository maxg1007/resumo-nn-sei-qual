import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Materia from "./screens/materia";
import Resumo from "./screens/resumo";
import CriarResumo from "./screens/criarResumo";
import CriarMateria from "./screens/criarMateria";
import CardResumo from "./screens/cardResumo";
import LoginScreen from "./screens/login";
import LerResumo from "./screens/lerResumo";

const Stack = createStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="login"
      >
        <Stack.Screen name="materia" component={Materia} />
        <Stack.Screen name="resumo" component={Resumo} />
        <Stack.Screen name="criarResumo" component={CriarResumo} />
        <Stack.Screen name="criarMateria" component={CriarMateria} />
        <Stack.Screen name="cardResumo" component={CardResumo} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="lerResumo" component={LerResumo} />
      </Stack.Navigator>
    );
  }
}
