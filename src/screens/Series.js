import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CardA from "../components/CardA";

export default function App() {
  const [series, setSeries] = React.useState([
    {
      id: 1,
      nome: "Guia de Produção de Metanfetamina por Walter Pinkman e Jesse White",
      genero: "Documentário",
      capa: "https://img-9gag-fun.9cache.com/photo/aKg6n2Z_700bwp.webp",
    },
    {
      id: 2,
      nome: "Meu Gay Favorito",
      genero: "Biografia",
      capa: "https://static.wikia.nocookie.net/meu-malvado-favorito/images/f/f1/Image1.jpg/revision/latest?cb=20130724012419&path-prefix=pt-br",
    },
    {
      id: 3,
      nome: "Morbius",
      genero: "Bom",
      capa: "https://pbs.twimg.com/media/FFyT_6GVgAAGgrG?format=jpg&name=900x900",
    },
    {
      id: 4,
      nome: "Sharknado 5",
      genero: "Tubação",
      capa: "https://m.media-amazon.com/images/M/MV5BMjQ3Mzk5NzAwNV5BMl5BanBnXkFtZTgwNDkwOTc3MjI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 5,
      nome: "O Biscoito Assassino",
      genero: "Nem sei",
      capa: "https://media.fstatic.com/STk4Yah-zE0ROG-KNjTZFvF3yQw=/322x478/smart/filters:format(webp)/media/movies/covers/2010/06/1145f96568edd14ede57b28bf156369f.jpg",
    },
    {
      id: 6,
      nome: "Vivemos em uma Sociedade que",
      genero: "Drama",
      capa: "https://img.elo7.com.br/product/original/2A1A4B7/big-poster-serie-joker-coringa-joaquin-phoenix-tam-90x60-cm-nerd.jpg",
    },
    {
      id: 7,
      nome: "Among Us",
      genero: "Terror / Mistério",
      capa: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Thing_1982.png",
    },
    {
      id: 8,
      nome: "Deltarune O Serie",
      genero: "Muitos",
      capa: "https://i.etsystatic.com/31113100/r/il/858258/3577034661/il_794xN.3577034661_lvnd.jpg",
    },
    {
      id: 9,
      nome: "Tubarão de 6 cabeças",
      genero: "Nem me pergunte",
      capa: "https://media.fstatic.com/sXKpFVatQNEju1RsLcNnKgc9xOo=/322x478/smart/filters:format(webp)/media/movies/covers/2018/05/20180509_222042.png",
    },
  ]);
  const removerItem = (id) => {
    const index = series.findIndex((serie) => serie.id === id);
    const novaLista = [...series];
    novaLista.splice(index, 1);
    setSeries(novaLista);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>W.I.P</Text>
      {/* <View style={styles.header}>
        <Text style={styles.titulo}>Serinhas</Text>
      </View>
      <ScrollView>
        {series.map((serie) => (
          <CardA
            nome={serie.nome}
            genero={serie.genero}
            capa={serie.capa}
            removerItem={() => removerItem(serie.id)}
            key={serie.id}
          />
        ))}
      </ScrollView> */}
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
  },
});
