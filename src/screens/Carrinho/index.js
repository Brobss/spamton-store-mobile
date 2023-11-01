import {
  StyleSheet,
  RefreshControl,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import ComprasApi from "../../api/compras";
import pegarInfo from "../../api/userinfo";

const PegarInfo = new pegarInfo();
const comprasApi = new ComprasApi();

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [items, setItens] = React.useState([]);
  const [id, setId] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [lista, setLista] = React.useState([]);

  const removerCarrinho = async (id) => {
    try {
      const response = await comprasApi.excluirCompra(id);
      console.log(response);
      const data = await comprasApi.buscarCompras();
      setItens(data);
    } catch (error) {
      console.error("Erro ao excluir o item:", error);
    }
  };

  useEffect(() => {
    async function carregarId() {
      try {
        const data = await PegarInfo.buscarInfo();
        setId(data.id);
        setEmail(data.email);
        console.log(id);
      } catch (error) {
        console.error("Erro ao carregar o Id do Usuário:", error);
      }
    }
    carregarId();
  }, []);

  useEffect(() => {
    async function carregarItens() {
      try {
        const data = await comprasApi.buscarCompras();
        setItens(data);
        console.log("Carrinho" + items);
      } catch (error) {
        console.error("Erro ao carregar os Itens:", error);
      }
    }
    carregarItens();
  }, []);

  const carregarItens = async () => {
    try {
      const data = await comprasApi.buscarCompras();
      setItens(data);
      console.log("Carrinho" + items);
    } catch (error) {
      console.error("Erro ao carregar os Itens:", error);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    carregarItens();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Itens no Carrinho:</Text>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={{ width: "100%" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {items.map((compra) => (
          <View key={compra.id} style={styles.item}>
            <>
              <Text style={styles.nomeItem}>
                {compra.itens[0].produto.nome}
              </Text>
              <Text style={styles.precoItem}>
                R$ {compra.itens[0].produto.preco}
              </Text>
              <TouchableOpacity
                onPress={() => removerCarrinho(compra.id)}
                style={styles.botao}
              >
                <Text style={{ color: "white", fontSize: 12 }}>Remover</Text>
              </TouchableOpacity>
            </>
          </View>
        ))}
        <TouchableOpacity style={styles.botaoFim}>
          <Text style={{ color: "white", fontSize: 15, alignSelf: "center" }}>
            Finalizar Compra
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    alignItems: "center",
  },
  header: {
    backgroundColor: "red",
    color: "white",
    fontSize: 30,
    margin: 10,
    padding: 20,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  titulo: {
    color: "white",
    fontSize: 30,
    margin: 10,
    alignSelf: "flex-start",
  },
  item: {
    backgroundColor: "#464545",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: "90%",
  },
  nomeItem: {
    color: "white",
    fontSize: 20,
  },
  precoItem: {
    color: "gray",
    fontSize: 15,
  },
  botao: {
    backgroundColor: "red",
    width: "50%",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 5,
  },
  botaoFim: {
    backgroundColor: "green",
    width: "90%",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});
