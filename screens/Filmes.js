import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Itens no Carrinho:</Text>
      <View style={styles.item}>
        <Text style={styles.nomeItem}>Among Action Figure</Text>
        <Text style={styles.precoItem}>R$ 95,50</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={{ color: "white", fontSize: 12 }}>Remover</Text>
        </TouchableOpacity>
      </View>
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
});
