import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme } from "react-native-paper";

function Home({ navigation }) {
  return (
    <View>
      <Text>
        Bem Vindo meu patrão meu compatriado meu comparça meu amigão meu
        cavaleiro meu príncipe meu guerreiro.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10,
  },
  card: {
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default Home;
