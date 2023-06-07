import React from "react";
import * as SecureStore from "expo-secure-store";

import { useSetRecoilState } from "recoil";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import { userState } from "../src/recoil/atoms/auth";
import LoginApi from "../src/api/login";

const loginApi = new LoginApi();

export default function LoginScreen() {
  const setUser = useSetRecoilState(userState);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState(null);

  const login = async () => {
    try {
      const data = await loginApi.login(username, password);
      setUser({
        loggedIn: true,
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      });
      await SecureStore.setItemAsync("access_token", data.access_token);
    } catch (error) {
      setUser({ loggedIn: false, access_token: null, refresh_token: null });
      setErrorMsg("Usuário ou senha inválidos!");
      await SecureStore.deleteItemAsync("access_token");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        Logout
        onChangeText={setUsername}
        style={styles.InputFoda}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.InputFoda}
      />
      <TouchableOpacity style={styles.Botom} onPress={() => login()}>
        <Text style={styles.textoCor}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.textoCorErro}>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    alignItems: "center",
    justifyContent: "center",
  },
  InputFoda: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "grey",
  },
  Botom: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  textoCor: {
    fontSize: 20,
    color: "black",
    margin: 10,
  },
  textoCorErro: {
    fontSize: 20,
    color: "red",
    margin: 10,
  },
});
