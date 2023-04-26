import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CardA from "../src/components/CardA";
import CardB from "../src/components/CardB";
import { Dimensions } from "react-native";

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
      nome: "DVD Morbius HD",
      preco: "10,50",
      capa: "https://pbs.twimg.com/media/FFyT_6GVgAAGgrG?format=jpg&name=900x900",
    },
    {
      id: 4,
      nome: "Banana (0.5kg)",
      preco: "5,75",
      capa: "https://img.freepik.com/vetores-gratis/bando-de-banana-amarela-madura-de-vetor-isolado-no-fundo-branco_1284-45456.jpg?w=360",
    },
    {
      id: 5,
      nome: "Armas de fogo",
      preco: "50",
      capa: "https://www.clubedetiroitajai.com.br/wp-content/uploads/2022/05/voce-sabe-qual-e-a-origem-das-armas-de-fogo-acesse-e-descubra-tudo-sobre.jpg",
    },
    {
      id: 6,
      nome: "Videotutorial Sun Tzu",
      preco: "5 milhões",
      capa: "https://upload.wikimedia.org/wikipedia/commons/c/cf/%E5%90%B4%E5%8F%B8%E9%A9%AC%E5%AD%99%E6%AD%A6.jpg",
    },
    {
      id: 7,
      nome: "Casca de banana",
      preco: "2,75",
      capa: "https://vitat.com.br/wp-content/uploads/2022/04/casca-de-banana-1.jpg",
    },
    {
      id: 8,
      nome: "Florianópolis",
      preco: "7,50",
      capa: "https://magazine.zarpo.com.br/wp-content/uploads/2023/01/capa-o-que-fazer-florianopolis.jpg",
    },
    {
      id: 9,
      nome: "1 Unidade de Amendoim",
      preco: "0,50",
      capa: "https://thumbs.dreamstime.com/b/um-amendoim-isolado-85881501.jpg",
    },
    {
      id: 10,
      nome: "Super Luigi para o Xbox One",
      preco: "0,50",
      capa: "https://steamuserimages-a.akamaihd.net/ugc/1467563393551129446/5D6824881D455B66A71853918555FD343B6C21B0/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    },
  ]);
  const [filmes2, setFilmes2] = React.useState([
    {
      id: 1,
      nome: "Fone de ouvido vegano",
      preco: "20,00",
      capa: "https://i.imgur.com/m6NBhBm.jpg",
    },
    {
      id: 2,
      nome: "Recorte do Obama",
      preco: "35,60",
      capa: "https://m.media-amazon.com/images/I/51oxbTodnfL.jpg",
    },
    {
      id: 3,
      nome: "Super Mario para o PS4",
      preco: "55,50",
      capa: "https://i1.sndcdn.com/artworks-Zhp4Hc1szbkYin1Z-CkHDCA-t500x500.jpg",
    },
    {
      id: 4,
      nome: "DVD Sharknado 5 8K",
      preco: "50,00",
      capa: "https://m.media-amazon.com/images/M/MV5BMjQ3Mzk5NzAwNV5BMl5BanBnXkFtZTgwNDkwOTc3MjI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 5,
      nome: "Peppino",
      preco: "3,25",
      capa: "https://d332juqdd9b8hn.cloudfront.net/wp-content/uploads/2023/01/PIZZA-TOWER-SCREENSHOT.jpg",
    },
    {
      id: 6,
      nome: "Fusca",
      preco: "120,99",
      capa: "https://motortudo.com/wp-content/uploads/2019/07/cropped-Fusca-1500-1973-Motor-Tudo-0.jpg",
    },
    {
      id: 7,
      nome: "Avião",
      preco: "10,99",
      capa: "https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/334042/e66c929a0d582bcde0c05fcc44d3742014aviaodeafrotamaismagicadomundo/77,0,2412,1440/1206,720,0.28/0/default.jpg",
    },
    {
      id: 8,
      nome: "Gol Quadrado",
      preco: "Gol Quadrado",
      capa: "https://quatrorodas.abril.com.br/wp-content/uploads/2018/02/chr8486-dng.jpg?quality=70&strip=info",
    },
    {
      id: 9,
      nome: "Guilherme Tamanhinho",
      preco: "10,99",
      capa: "https://static.wikia.nocookie.net/cnfanon/images/8/82/Dexter.jpg/revision/latest/scale-to-width-down/445?cb=20130406175710",
    },
    {
      id: 10,
      nome: "Ácido sulfúrico",
      preco: "25,75",
      capa: "https://fontagua.com.br/wp-content/webp-express/webp-images/uploads/2023/01/agua-cristalina-1160x773.jpg.webp",
    },
    {
      id: 11,
      nome: "Saul Goodman",
      preco: "45,65",
      capa: "https://media.tenor.com/1y8zDc-ll-EAAAAd/3d-saul-saul-goodman.gif",
    },
    {
      id: 12,
      nome: "AAAA",
      preco: "44,44",
      capa: "https://pbs.twimg.com/media/FMRQx-5XEAM5Wb7.jpg",
    },
  ]);

  const removerItem = (id) => {
    const index = filmes.findIndex((filme) => filme.id === id);
    const novaLista = [...filmes];
    novaLista.splice(index, 1);
    setFilmes(novaLista);
  };

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
            {filmes.map((filme) => (
              <CardA
                nome={filme.nome}
                preco={filme.preco}
                capa={filme.capa}
                removerItem={() => removerItem(filme.id)}
                key={filme.id}
              />
            ))}
          </ScrollView>
          <Text style={styles.titulo}>Outros Produtos</Text>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            {filmes2.map((filme) => (
              <CardB
                nome={filme.nome}
                preco={filme.preco}
                capa={filme.capa}
                removerItem={() => removerItem(filme.id)}
                key={filme.id}
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
});
