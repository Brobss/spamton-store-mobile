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

import { userState } from "../../recoil/atoms/auth";
import LoginApi from "../../api/login";

const loginApi = new LoginApi();

export default function LoginScreen() {
  const setUser = useSetRecoilState(userState);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState(null);

  const login = async () => {
    try {
      const data = await loginApi.login(email, password);
      setUser({
        loggedIn: true,
        access: data.access,
        refresh: data.refresh,
      });
      await SecureStore.setItemAsync("access", data.access);
    } catch (error) {
      setUser({ loggedIn: false, access: null, refresh: null });
      setErrorMsg("Usuário ou senha inválidos!");
      await SecureStore.deleteItemAsync("access");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Endereço de Email"
        value={email}
        Logout
        onChangeText={setEmail}
        style={styles.InputFoda}
      />
      <TextInput
        placeholder="Senha"
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
