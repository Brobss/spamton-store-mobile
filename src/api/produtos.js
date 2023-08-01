import axios from "axios";

export default class MoviesApi {
  async getProdutos() {
    try {
      const { data } = await axios.get("http://127.0.0.1:19001/produtos");
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}
