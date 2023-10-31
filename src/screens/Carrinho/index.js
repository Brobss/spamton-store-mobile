import {
  StyleSheet,
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
  const itens = [
    {
      id: 1,
      nome: "Among Action Figure",
      preco: "95,50",
    },
    {
      id: 2,
      nome: "Saul Goodman",
      preco: "45,65",
    },
  ];
  const [items, setItens] = React.useState([]);
  const [id, setId] = React.useState([]);
  const [email, setEmail] = React.useState([]);

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
        const response = await comprasApi.buscarCompras();
        const bruh = response.filter((item) => {
          return item.usuario == email;
        });
        const carrinho = bruh.filter((item) => {
          return item.status == "Carrinho";
        });
        setItens(carrinho);
        console.log(items);
      } catch (error) {
        console.error("Erro ao carregar os Itens:", error);
      }
    }
    carregarItens();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Itens no Carrinho:</Text>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={{ width: "100%" }}
      >
        {itens.map((item) => (
          <>
            <View key={item.id} style={styles.item}>
              <Text style={styles.nomeItem}>{item.nome}</Text>
              <Text style={styles.precoItem}>R$ {item.preco}</Text>
              <TouchableOpacity style={styles.botao}>
                <Text style={{ color: "white", fontSize: 12 }}>Remover</Text>
              </TouchableOpacity>
            </View>
          </>
        ))}

        {itens.map((compra) => (
          <>
            {compra.map((item) => (
              <>
                <View key={item.id} style={styles.item}>
                  <Text style={styles.nomeItem}>{item.nome}</Text>
                  <Text style={styles.precoItem}>R$ {item.preco}</Text>
                  <TouchableOpacity style={styles.botao}>
                    <Text style={{ color: "white", fontSize: 12 }}>
                      Remover
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ))}
          </>
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
