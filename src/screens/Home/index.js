import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";

import api from "../../services/api";

import CardA from "../../components/CardA";
import CardB from "../../components/CardB";

export default function App({ navigation }) {
  const [recomendados, setRecomendados] = React.useState([]);
  useEffect(() => {
    async function carregarRecomendados() {
      const response = await api.get("/recomendados");
      const data = response.data.map((prod) => ({
        id: prod.id,
        nome: prod.nome,
        preco: prod.preco,
        capa: prod.capa,
        produto: prod,
        descricao: prod.descricao,
      }));
      setRecomendados(data);
    }
    carregarRecomendados();
  }, []);

  const [produtos, setProdutos] = React.useState([]);
  useEffect(() => {
    async function carregarProdutos() {
      const response = await api.get("/produtos");
      const data = response.data.map((prod) => ({
        id: prod.id,
        nome: prod.nome,
        preco: prod.preco,
        capa: prod.capa,
        produto: prod,
        descricao: prod.descricao,
      }));
      setProdutos(data);
    }
    carregarProdutos();
  }, []);

  return (
    <>
      <ScrollView>
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
                capa={produto.capa}
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
                capa={produto.capa}
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
