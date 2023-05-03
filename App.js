import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image, StatusBar, Text, StyleSheet, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import Home from "./screens/Home";
import Conta from "./screens/Conta";
import Carrinho from "./screens/Carrinho";
import Series from "./screens/Series";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const CorBtn = "white";
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      style={{ backgroundColor: "black" }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderWidth: 0,
        },
        tabBarLabelStyle: {
          display: "none",
        },
        tabBarIndicatorStyle: { display: "none" },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FontAwesomeIcon
                icon={faHouse}
                color={focused ? "red" : "white"}
                size={22}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FontAwesomeIcon
                icon={faCartShopping}
                color={focused ? "red" : "white"}
                size={22}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Conta"
        component={Conta}
        options={{
          title: "Conta",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FontAwesomeIcon
                icon={faUser}
                color={focused ? "red" : "white"}
                size={22}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Opções"
        component={Series}
        options={{
          title: "Opções",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FontAwesomeIcon
                icon={faBars}
                color={focused ? "red" : "white"}
                size={22}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <View style={styles.caixa}>
        <Image
          style={styles.foto}
          source={{
            uri: "https://static.wikia.nocookie.net/villains/images/d/d9/Spamton_battle_static.png/",
          }}
        />
        <Text style={styles.header}>Spamton Store</Text>
      </View>

      <NavigationContainer>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <MyTabs />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
    backgroundColor: "black",
  },
  caixa: {
    backgroundColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  foto: {
    width: 30,
    height: 50,
    marginLeft: 10,
    marginVertical: 5,
  },
});
