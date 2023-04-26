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
    <ScrollView style={styles.container}>
      <ScrollView horizontal pagingEnabled style={{ height: 410 }}>
        <Image
          source={{
            uri: "https://vitat.com.br/wp-content/uploads/2022/04/casca-de-banana-1.jpg",
          }}
          style={styles.foto}
        />
        <Image
          source={{
            uri: "https://www.mundoboaforma.com.br/wp-content/uploads/2018/03/casca-de-banana.jpg",
          }}
          style={styles.foto}
        />
        <Image
          source={{
            uri: "https://agroalmanaque.files.wordpress.com/2015/02/casca-de-banana.jpg",
          }}
          style={styles.foto}
        />
        <Image
          source={{
            uri: "https://www.jcam.com.br/wp-content/uploads/2022/07/casca-de-banana-no-fundo-branco_35712-215.jpg",
          }}
          style={styles.foto}
        />
      </ScrollView>
      <Text style={styles.titulo}>Casca de Banana</Text>
      <Text style={styles.preco}>R$ 2,75</Text>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.btnCompra}>
          <Text>Comprar Agora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCarro}>
          <FontAwesomeIcon icon={faCartShopping} />
          <Text>+ Add ao Carrinho</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Placeholder</Text>
      <Text style={styles.titulo}>Placeholder</Text>
      <Text style={styles.titulo}>Placeholder</Text>
      <Text style={styles.titulo}>Placeholder</Text>
      <Text style={styles.titulo}>Placeholder</Text>
      <Text style={styles.titulo}>Placeholder</Text>
      <Text style={styles.titulo}>Placeholder</Text>
      <Text style={styles.titulo}>Placeholder</Text>
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
});
