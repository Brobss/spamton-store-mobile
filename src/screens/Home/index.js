import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";

import api from "../../services/api";

import CardA from "../../components/CardA";
import CardB from "../../components/CardB";

export default function App({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [recomendados, setRecomendados] = React.useState([]);
  useEffect(() => {
    async function carregarRecomendados() {
      const response = await api.get("/produtos");
      const data = response.data.map((prod) => ({
        produto: prod,
        id: prod.id,
        nome: prod.nome,
        preco: prod.preco,
        thumb: prod.thumbnail.file,
        descricao: prod.descricao,
      }));
      setRecomendados(data);
    }
    carregarRecomendados();
  }, []);

  const carregarRecomendados = async () => {
    const response = await api.get("/produtos");
    const data = response.data.map((prod) => ({
      produto: prod,
      id: prod.id,
      nome: prod.nome,
      preco: prod.preco,
      thumb: prod.thumbnail.file,
      descricao: prod.descricao,
    }));
    setRecomendados(data);
  };

  const [produtos, setProdutos] = React.useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const response = await api.get("/produtos");
        const data = response.data.map((prod) => ({
          produto: prod,
          id: prod.id,
          nome: prod.nome,
          preco: prod.preco,
          thumb: prod.thumbnail.file,
        }));
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
      }
    }

    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    const response = await api.get("/produtos");
    const data = response.data.map((prod) => ({
      produto: prod,
      id: prod.id,
      nome: prod.nome,
      preco: prod.preco,
      thumb: prod.thumbnail.file,
      descricao: prod.descricao,
    }));
    setProdutos(data);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    carregarRecomendados();
    carregarProdutos();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <Text style={styles.titulo}>Recomendados</Text>
          <ScrollView
            horizontal
            pagingEnabled
            snapToInterval={Dimensions.get("window").width}
          >
            {recomendados.map((produto) => (
              <CardA
                nome={produto.nome}
                preco={produto.preco}
                capa={produto.thumb}
                key={produto.id}
                produto={produto}
                onPress={() =>
                  navigation.navigate("Produto", { item: produto })
                }
              />
            ))}
          </ScrollView>
          <Text style={styles.titulo}>Outros Produtos</Text>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            {produtos.map((produto) => (
              <CardB
                nome={produto.nome}
                preco={produto.preco}
                capa={produto.thumb}
                key={produto.id}
                produto={produto}
                onPress={() =>
                  navigation.navigate("Produto", { item: produto })
                }
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </>
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
  scrollViewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  bruh: {
    color: "white",
    fontSize: 30,
    padding: 10,
  },
  voltar: {
    padding: 5,
    color: "white",
    fontSize: 30,
    paddingLeft: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
  },
  textvoltar: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 10,
    paddingBottom: 5,
  },
});
