import axios from "axios";

export default class MoviesApi {
  async getProdutos() {
    try {
      const { data } = await axios.get("http://191.52.55.23:19003/produtos");
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}
