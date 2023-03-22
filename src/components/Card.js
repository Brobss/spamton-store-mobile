import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.capa }} style={styles.capa} />
      <Text style={styles.nomeFilme}>{props.nome}</Text>
      <Text style={styles.genero}>{props.genero}</Text>
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
    alignContent: "center",
    alignItems: "center",
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
});
