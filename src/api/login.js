import axios from "axios";

export default class LoginApi {
  async login(email, password) {
    try {
      const { data } = await axios.post("http://191.52.55.23:19003/token/", {
        email,
        password,
      });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}
