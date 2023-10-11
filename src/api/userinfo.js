import * as SecureStore from "expo-secure-store";
import api from "../services/api";
import jwt_decode from "jwt-decode";

export default class pegarInfo {
  async buscarInfo() {
    try {
      const access = await SecureStore.getItemAsync("access");
      const token = jwt_decode(access).user_id;
      const data = await api.get("/api/usuarios/" + token);
      console.log(data);
      return data.data;
    } catch (error) {
      return console.log("Fodeu: " + error);
    }
  }
}
