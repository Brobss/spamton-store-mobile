import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import ComprasApi from "../../api/compras";
import pegarInfo from "../../api/userinfo";

const PegarInfo = new pegarInfo();
const comprasApi = new ComprasApi();

export default function Produto({ route, navigation }) {
  const { item } = route.params;
  const [produto, setProduto] = React.useState([]);
  const [fotos, setFotos] = React.useState([]);
  const [id, setId] = React.useState([]);

  useEffect(() => {
    async function carregarProduto() {
      try {
        const response = await api.get("/produtos/" + item.id);
        const data = response.data;
        setProduto(data);
        setFotos(data.imagens);
      } catch (error) {
        console.error("Erro ao carregar o produto:", error);
      }
    }
    carregarProduto();
  }, []);

  useEffect(() => {
    async function carregarId() {
      try {
        const data = await PegarInfo.buscarInfo();
        setId(data.id);
        console.log(id);
      } catch (error) {
        console.error("Erro ao carregar o Id do Usuário:", error);
      }
    }
    carregarId();
  }, []);

  const addCarrinho = async () => {
    try {
      const response = await comprasApi.adicionarCompra({
        itens: [
          {
            produto: produto.id,
            quantidade: 1,
          },
        ],
        usuario: id,
      });
      Alert.alert("Pronto!", "Produto Adicionado ao Carrinho!");
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
      Alert.alert("Ops!", "Ocorreu um erro ao adicionar ao carrinho!");
    }
  };

  const showAlertCarrinho = () =>
    Alert.alert(
      "Adicionar ao Carrinho",
      "Deseja mesmo adicionar ao carrinho?",
      [
        {
          text: "Cancelar",
          onPress: () =>
            Alert.alert(
              "Operação Cancelada",
              "O Produto não foi adicionado ao Carrinho!"
            ),
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => addCarrinho(),
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          console.log("Dismissed");
        },
      }
    );

  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal pagingEnabled style={{ height: 410 }}>
        {fotos.map((foto) => (
          <Image source={{ uri: foto.file }} style={styles.foto} />
        ))}
      </ScrollView>
      <Text style={styles.titulo}>{produto.nome}</Text>
      <Text style={styles.preco}>R$ {produto.preco}</Text>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.btnCompra}>
          <Text>Comprar Agora</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showAlertCarrinho} style={styles.btnCarro}>
          <FontAwesomeIcon icon={faCartShopping} />
          <Text>+ Add ao Carrinho</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Descrição:</Text>
      <Text style={styles.desc}>{produto.descricao}</Text>
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
