import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import * as SecureStore from "expo-secure-store";
import { userState } from "../../recoil/atoms/auth";
import pegarInfo from "../../api/userinfo";
import Produto from "../Produto";

const PegarInfo = new pegarInfo();

export default function App() {
  const [usuario, setUsuario] = React.useState([]);
  const imagem_perfil =
    "https://res.cloudinary.com/dnxjixtc0/image/upload/v1698777031/c2ctdpeovsgpeqwdq25q.jpg";

  useEffect(() => {
    async function info() {
      try {
        const data = await PegarInfo.buscarInfo();
        setUsuario(data);
        console.log(data);
        if (!data.email) {
          logout();
        }
        if (data.imagem_perfil) {
          imagem_perfil = data.imagem_perfil;
        } else {
          imagem_perfil =
            "https://res.cloudinary.com/dnxjixtc0/image/upload/v1698777031/c2ctdpeovsgpeqwdq25q.jpg";
        }
      } catch (error) {
        console.log(error);
      }
    }
    info();
  }, []);

  const setUser = useSetRecoilState(userState);
  const logout = async () => {
    setUser({ loggedIn: false, access: null, refresh: null });
    await SecureStore.deleteItemAsync("access");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Seus Dados:</Text>
      <Image source={{ uri: imagem_perfil }} style={styles.foto} />
      <Text style={styles.textInfo}>
        Nome: {usuario.first_name} {usuario.last_name}
      </Text>
      <Text style={styles.textInfo}>Email: {usuario.email}</Text>
      <Text style={styles.textInfo}>Telefone: {usuario.telefone}</Text>
      <Text style={styles.textInfo}>CPF: {usuario.cpf}</Text>
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
