import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

export default function Card(props) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: props.capa }} style={styles.capa} />
      <Text style={styles.nomeProduto}>{props.nome}</Text>
      <Text style={styles.preco}>R$ {props.preco}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nomeProduto: {
    color: "#e0e0e0",
    fontSize: 15,
    margin: 3,
  },
  card: {
    backgroundColor: "#464545",
    color: "white",
    borderRadius: 10,
    fontSize: 30,
    padding: 5,
    width: "48%",
    margin: "1%",
  },
  capa: {
    resizeMode: "cover",
    width: "100%",
    aspectRatio: 1,
    borderRadius: 5,
  },
  preco: {
    color: "white",
    fontSize: 20,
    margin: 3,
  },
});
