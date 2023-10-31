import api from "../services/api";

export default class ComprasApi {
  async buscarCompras() {
    const { data } = await api.get("/compras/");
    return data;
  }
  async adicionarCompra(compra) {
    const { data } = await api.post("/compras/", compra);
    return data;
  }
  async atualizarCompra(compra) {
    const { data } = await api.put(`/compras/${compra.id}/`, compra);
    return data;
  }
  async excluirCompra(id) {
    const { data } = await api.delete(`/compras/${id}/`);
    return data;
  }
  async buscarCompra(id) {
    const { data } = await api.get(`/compras/${id}/`);
    return data;
  }
}
