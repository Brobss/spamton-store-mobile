import api from "../services/api";

export default class LoginApi {
  async login(email, password) {
    try {
      const { data } = await api.post(
        "https://spamton-store-backend-dev-qzhk.1.us-1.fl0.io/token/",
        {
          email,
          password,
        }
      );
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}
