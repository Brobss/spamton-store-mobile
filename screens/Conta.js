import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CardA from "../src/components/CardA";

export default function App() {
  const [livros, setLivros] = React.useState([]);
  const removerItem = (id) => {
    const index = livros.findIndex((livro) => livro.id === id);
    const novaLista = [...livros];
    novaLista.splice(index, 1);
    setLivros(novaLista);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Seus Dados:</Text>
      <Text style={styles.textInfo}>Nome:</Text>
      <Text style={styles.textInfo}>Endereço:</Text>
      <Text style={styles.textInfo}>Telefone:</Text>
      <TouchableOpacity style={styles.btnConta}>
        <Text style={styles.textoBtn}>Seus Pedidos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    color: "white",
    fontSize: 30,
    margin: 10,
    padding: 20,
    width: "100%",
  },
  titulo: {
    color: "white",
    fontSize: 30,
  },
  btnConta: {
    backgroundColor: "red",
    width: "50%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 5,
  },
  textoBtn: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  textInfo: {
    color: "black",
    fontSize: 15,
    margin: 10,
    padding: 10,
    width: "50%",
  },
});
