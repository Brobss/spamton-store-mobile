import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Card from "../src/components/Card";

export default function App() {
  const [filmes, setFilmes] = React.useState([
    {
      id: 1,
      nome: "Bicicleta",
      preco: "10000,00",
      capa: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/e34cebad-ca71-4de2-a4d1-b74d5e7168cf.__CR0,0,970,600_PT0_SX970_V1___.png",
    },
    {
      id: 2,
      nome: "Among Action Figure",
      preco: "95,50",
      capa: "https://ae01.alicdn.com/kf/H7a083e0513714932a2578cca8a4aac75x.jpg?width=1920&height=1920&hash=3840",
    },
    {
      id: 3,
      nome: "Morbius",
      preco: "Bom",
      capa: "https://pbs.twimg.com/media/FFyT_6GVgAAGgrG?format=jpg&name=900x900",
    },
    {
      id: 4,
      nome: "Sharknado 5",
      preco: "Tubação",
      capa: "https://m.media-amazon.com/images/M/MV5BMjQ3Mzk5NzAwNV5BMl5BanBnXkFtZTgwNDkwOTc3MjI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 5,
      nome: "O Biscoito Assassino",
      preco: "Nem sei",
      capa: "https://media.fstatic.com/STk4Yah-zE0ROG-KNjTZFvF3yQw=/322x478/smart/filters:format(webp)/media/movies/covers/2010/06/1145f96568edd14ede57b28bf156369f.jpg",
    },
    {
      id: 6,
      nome: "Vivemos em uma Sociedade que",
      preco: "Drama",
      capa: "https://img.elo7.com.br/product/original/2A1A4B7/big-poster-filme-joker-coringa-joaquin-phoenix-tam-90x60-cm-nerd.jpg",
    },
    {
      id: 7,
      nome: "Among Us",
      preco: "Terror / Mistério",
      capa: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Thing_1982.png",
    },
    {
      id: 8,
      nome: "Deltarune O Filme",
      preco: "Muitos",
      capa: "https://i.etsystatic.com/31113100/r/il/858258/3577034661/il_794xN.3577034661_lvnd.jpg",
    },
    {
      id: 9,
      nome: "Tubarão de 6 cabeças",
      preco: "Nem me pergunte",
      capa: "https://media.fstatic.com/sXKpFVatQNEju1RsLcNnKgc9xOo=/322x478/smart/filters:format(webp)/media/movies/covers/2018/05/20180509_222042.png",
    },
  ]);
  const removerItem = (id) => {
    const index = filmes.findIndex((filme) => filme.id === id);
    const novaLista = [...filmes];
    novaLista.splice(index, 1);
    setFilmes(novaLista);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.titulo}>Filminhos</Text>
      </View> */}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {filmes.map((filme) => (
          <Card
            nome={filme.nome}
            preco={filme.preco}
            capa={filme.capa}
            removerItem={() => removerItem(filme.id)}
            key={filme.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252525",
  },
  // header: {
  //   backgroundColor: "red",
  //   color: "white",
  //   fontSize: 30,
  //   margin: 10,
  //   padding: 20,
  //   width: "100%",
  //   alignContent: "center",
  //   alignItems: "center",
  // },
  titulo: {
    color: "white",
    fontSize: 30,
  },
  scrollViewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
});
