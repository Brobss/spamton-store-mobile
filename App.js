import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Home from "./screens/Home";
import Livros from "./screens/Livros";
import Filmes from "./screens/Filmes";
import Series from "./screens/Series";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Filmes}
        options={{
          title: "Carrinho",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={{
                  uri: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3258713/shopping-cart-icon-md.png",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Conta"
        component={Livros}
        options={{
          title: "Conta",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 20, height: 25 }}
                source={{
                  uri: "https://icon-library.com/images/my-account-icon/my-account-icon-3.jpg",
                }}
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
              <Image
                style={{ width: size, height: size }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/56/56763.png",
                }}
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
      <MyTabs />
    </NavigationContainer>
  );
}
