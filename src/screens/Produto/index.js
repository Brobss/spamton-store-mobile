import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { useNavigation } from "@react-navigation/native";

export default function Produto({ route, navigation }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal pagingEnabled style={{ height: 410 }}>
        <Image source={{ uri: item.capa }} style={styles.foto} />
        <Image source={{ uri: item.capa }} style={styles.foto} />
        <Image source={{ uri: item.capa }} style={styles.foto} />
        <Image source={{ uri: item.capa }} style={styles.foto} />
      </ScrollView>
      <Text style={styles.titulo}>{item.nome}</Text>
      <Text style={styles.preco}>R$ {item.preco}</Text>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.btnCompra}>
          <Text>Comprar Agora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCarro}>
          <FontAwesomeIcon icon={faCartShopping} />
          <Text>+ Add ao Carrinho</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Descrição:</Text>
      <Text style={styles.desc}>{item.descricao}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252525",
  },
  titulo: {
    color: "white",
    fontSize: 30,
    margin: 10,
  },
  preco: {
    color: "white",
    fontSize: 50,
    margin: 10,
  },
  btnCompra: {
    backgroundColor: "red",
    width: "49%",
    padding: 15,
    margin: "0.5%",
    borderRadius: 5,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  btnCarro: {
    backgroundColor: "yellow",
    width: "49%",
    padding: 15,
    borderRadius: 5,
    margin: "0.5%",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  botoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  foto: {
    resizeMode: "cover",
    width: 410,
    aspectRatio: 1,
  },
  desc: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 100,
  },
});
