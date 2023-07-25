import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import * as SecureStore from "expo-secure-store";
import { userState } from "../../src/recoil/atoms/auth";

export default function App() {
  const setUser = useSetRecoilState(userState);
  const logout = async () => {
    setUser({ loggedIn: false, access_token: null, refresh_token: null });
    await SecureStore.deleteItemAsync("access_token");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Seus Dados:</Text>
      <Image
        source={{
          uri: "https://as2.ftcdn.net/v2/jpg/00/49/22/63/1000_F_49226343_zrW0Mlu6hqxzgN2gUBwW8EGaHmD5GZU6.jpg",
        }}
        style={styles.foto}
      />
      <Text style={styles.textInfo}>Nome: Rodrigasso da Silva Bacanão</Text>
      <Text style={styles.textInfo}>Endereço: Rua Bacanas 464</Text>
      <Text style={styles.textInfo}>Telefone: (11)1111-1112</Text>
      <TouchableOpacity style={styles.btnEdit}>
        <Text style={styles.textoBtnEdit}>Editar Informações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnConta}>
        <Text style={styles.textoBtn}>Seus Pedidos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnConta} onPress={() => logout()}>
        <Text style={styles.textoBtn}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252525",
    width: "100%",
    height: "100%",
  },
  header: {
    color: "white",
    fontSize: 30,
    margin: 10,
    width: "100%",
  },
  titulo: {
    color: "white",
    fontSize: 30,
  },
  btnConta: {
    backgroundColor: "red",
    width: "90%",
    padding: 10,
    borderRadius: 7,
    alignSelf: "center",
    marginBottom: 10,
  },
  textoBtn: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginLeft: 10,
  },
  textInfo: {
    color: "white",
    fontSize: 17,
    margin: 5,
    marginHorizontal: 10,
    padding: 5,
    flexDirection: "row",
  },
  foto: {
    resizeMode: "cover",
    width: "30%",
    aspectRatio: 1,
    borderRadius: 5,
    borderRadius: 1500,
    alignSelf: "center",
  },
  btnEdit: {
    backgroundColor: "yellow",
    width: "90%",
    padding: 10,
    borderRadius: 7,
    alignSelf: "center",
    marginVertical: 10,
  },
  textoBtnEdit: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});
