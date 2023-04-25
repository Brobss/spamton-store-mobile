import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.capa }} style={styles.capa} />
      <Text style={styles.nomeProduto}>{props.nome}</Text>
      <Text style={styles.preco}>R$ {props.preco}</Text>
      <TouchableOpacity onPress={props.removerItem} style={styles.botao}>
        <Text style={{ color: "#464545", fontWeight: "bold" }}>
          <FontAwesomeIcon icon={faCartShopping} /> +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nomeProduto: {
    color: "#e0e0e0",
    fontSize: 20,
    padding: 3,
  },
  card: {
    backgroundColor: "#464545",
    color: "white",
    borderRadius: 10,
    fontSize: 30,
    padding: 5,
    width: 200,
    margin: 5,
  },
  capa: {
    resizeMode: "cover",
    width: "100%",
    aspectRatio: 1,
    borderRadius: 5,
  },
  preco: {
    color: "white",
    fontSize: 30,
    padding: 3,
  },
  botao: {
    backgroundColor: "#F0F3B0",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: "30%",
    alignSelf: "flex-end",
  },
});
