import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import Home from "../src/screens/Home/index";
import Conta from "../src/screens/Conta/index";
import Carrinho from "../src/screens/Carrinho/index";
import Opcoes from "../src/screens/Opcoes/index";
import Produto from "../src/screens/Produto";
import Configuracoes from "../src/screens/Opcoes/Configuracoes/index";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Página Inicial",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Produto"
        component={Produto}
        options={{
          title: "Detalhes do Produto",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function OpcoesRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Opcoes"
        component={Opcoes}
        options={{
          title: "Mais Opções",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Configurações"
        component={Configuracoes}
        options={{
          title: "Configurações",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function CarrinhoRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          title: "Carrinho de Compras",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ContaRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Conta"
        component={Conta}
        options={{
          title: "Minha Conta",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
function MyTabs() {
  const CorBtn = "white";
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      style={{ backgroundColor: "black" }}
      screenOptions={({ route }) => ({
        swipeEnabled: false,
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
        component={HomeRoutes}
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
        component={CarrinhoRoutes}
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
        component={ContaRoutes}
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
        component={OpcoesRoutes}
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
      <NavigationContainer independent={true}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <MyTabs />
      </NavigationContainer>
    </>
  );
}
