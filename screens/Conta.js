import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
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
      <Image
        source={{
          uri: "https://as2.ftcdn.net/v2/jpg/00/49/22/63/1000_F_49226343_zrW0Mlu6hqxzgN2gUBwW8EGaHmD5GZU6.jpg",
        }}
        style={styles.foto}
      />
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
    backgroundColor: "#252525",
    width: "100%",
    height: "100%",
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
    padding: 10,
    borderRadius: 12,
    marginLeft: 20,
  },
  textoBtn: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginLeft: 10,
  },
  textInfo: {
    color: "white",
    fontSize: 15,
    margin: 5,
    padding: 5,
    width: "30%",
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
});
