import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CardA from "../src/components/CardA";

export default function App() {
  const [livros, setLivros] = React.useState([
    {
      id: 1,
      nome: "Guia de produção de metanfetamina por Walter White e Jesse Pinkman",
      genero: "Ciência",
      capa: "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
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
      capa: "https://img.elo7.com.br/product/original/2A1A4B7/big-poster-filme-joker-coringa-joaquin-phoenix-tam-90x60-cm-nerd.jpg",
    },
    {
      id: 7,
      nome: "Among Us",
      genero: "Terror / Mistério",
      capa: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Thing_1982.png",
    },
    {
      id: 8,
      nome: "Deltarune O livro",
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
    const index = livros.findIndex((livro) => livro.id === id);
    const novaLista = [...livros];
    novaLista.splice(index, 1);
    setLivros(novaLista);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Livrinhos</Text>
      </View>
      <ScrollView>
        {livros.map((livro) => (
          <CardA
            nome={livro.nome}
            genero={livro.genero}
            capa={livro.capa}
            removerItem={() => removerItem(livro.id)}
            key={livro.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
