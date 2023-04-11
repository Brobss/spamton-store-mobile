import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.capa }} style={styles.capa} />
      <Text style={styles.nomeFilme}>{props.nome}</Text>
      <Text style={styles.genero}>Gênero(s): {props.genero}</Text>
      <TouchableOpacity onPress={props.removerItem} style={styles.botao}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nomeFilme: {
    color: "white",
    fontSize: 30,
  },
  card: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 10,
    fontSize: 30,
    margin: 10,
    padding: 20,
    alignItems: "center",
    width: 200,
  },
  capa: {
    resizeMode: "cover",
    width: 200,
    height: 300,
  },
  genero: {
    color: "grey",
    fontSize: 15,
  },
  botao: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
  },
});
