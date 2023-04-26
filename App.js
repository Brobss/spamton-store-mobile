import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StatusBar } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import Home from "./screens/Home";
import Conta from "./screens/Conta";
import Filmes from "./screens/Filmes";
import Series from "./screens/Series";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const CorBtn = "white";
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarStyle: {
          color: "white",
          backgroundColor: "black",
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: "black",
        },
        headerTitleStyle: {
          color: "#fff",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        tabBarLabelStyle: {
          display: "none",
        },
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
                size={focused ? 30 : 22}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Filmes}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FontAwesomeIcon
                icon={faCartShopping}
                color={focused ? "red" : "white"}
                size={focused ? "30" : "22"}
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
                size={focused ? "30" : "22"}
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
                size={focused ? "30" : "22"}
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
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <MyTabs />
    </NavigationContainer>
  );
}
