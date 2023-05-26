import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/BubblegumSans-Regular.ttf"),
};

export default class Materia extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  loadFont = async () => {
    await Font.loadAsync(customFonts);
    this.setState({ fontLoaded: true });
  };
  componentDidMount() {
    this.loadFont();
    console.log("o codigo passou por aqui :D1");
  }
  render() {
    let materia = [
      "historia",
      "fisica",
      "quimica",
      "biologia",
      "geografia",
      "matematica",
      "literatura",
      "ramatica",
      "sociologia",
      "filosofia",
      "redacao",
      "ingles",
    ];

    if (this.state.fontLoaded) {
      SplashScreen.hideAsync();

      return (
        <View style={Styles.container}>
          <ImageBackground
            source={require("../assets/fundo.jpg")}
            style={Styles.imageBackground}
          >
            <SafeAreaView style={Styles.safeArea} />
            <View style={Styles.appTitle}>
              <Text style={Styles.titleText}>Organizador de resumos</Text>
            </View>
            <View style={Styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[0],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>historia</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[1],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>{"f" + "isica"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[2],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>{"quimica"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[3],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>{"biologia"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[4],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>{"geografia"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[5],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>{"matematica"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[6],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>{"literatura"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[7],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>{"gramatica"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[8],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>{"sociologia"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[9],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>{"filosofia"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[10],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>{"redacao"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("resumo", {
                    materia: materia[11],
                  });
                }}
                style={Styles.materiaButton}
              >
                <Text style={Styles.materiaText}>{"ingles"}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={require("../assets/plus.png")}
                style={Styles.plus}
              />
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
}

const Styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
  appTitle: {
    flex: 0.4,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Bubblegum-Sans",
  },
  materiaText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 30,
  },
  materiaButton: {
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 20,
    width: 195,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  plus: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 20,
  },
  safeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
