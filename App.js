import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./src/components/Card";

export default function App() {
  const filmes = [
    {
      nome: "Mauro",
      genero: "Aventura",
      capa: "https://uploads.jovemnerd.com.br/wp-content/uploads/2023/02/super_mario_bros_filme_poster__2b3rnu52-758x1200.jpeg",
    },
    {
      nome: "Meu Gru",
      genero: "Biografia",
      capa: "https://static.wikia.nocookie.net/meu-malvado-favorito/images/f/f1/Image1.jpg/revision/latest?cb=20130724012419&path-prefix=pt-br",
    },
    {
      nome: "Morbius",
      genero: "Bom",
      capa: "https://pbs.twimg.com/media/FFyT_6GVgAAGgrG?format=jpg&name=900x900",
    },
    {
      nome: "Sharknado 5",
      genero: "Tubação",
      capa: "https://m.media-amazon.com/images/M/MV5BMjQ3Mzk5NzAwNV5BMl5BanBnXkFtZTgwNDkwOTc3MjI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      nome: "O Biscoito Assassino",
      genero: "Nem sei",
      capa: "https://media.fstatic.com/STk4Yah-zE0ROG-KNjTZFvF3yQw=/322x478/smart/filters:format(webp)/media/movies/covers/2010/06/1145f96568edd14ede57b28bf156369f.jpg",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Filminhos</Text>
      </View>
      <ScrollView>
        {filmes.map((filme) => (
          <Card nome={filme.nome} genero={filme.genero} capa={filme.capa} />
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
