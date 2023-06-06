import * as React from "react";
import * as SecureStore from "expo-secure-store";
import { Image, StatusBar, Text, StyleSheet, View } from "react-native";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { userState } from "../src/recoil/atoms/auth";

import LoginScreen from "../screens/Login";
import HomeScreen from "../src/Telas";

const Stack = createNativeStackNavigator();

export default function Main() {
  const currentUserState = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let access_token = null;
      try {
        access_token = await SecureStore.getItemAsync("access_token");
      } catch (e) {
        console.log(e);
      }
      if (access_token === null) {
        setUser({ access_token: null, loggedIn: false });
      } else {
        setUser({ access_token, loggedIn: true });
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={"transparent"}
      />
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
        <Stack.Navigator
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
          {currentUserState.loggedIn ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
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
    width: 37,
    height: 50,
    marginLeft: 10,
    marginVertical: 5,
  },
});
