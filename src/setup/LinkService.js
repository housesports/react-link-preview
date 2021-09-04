import http from "./http-common";


class LinkService {
  getAll() {
    return http.get("/linkdata");
  }

  get(id) {
    return http.get(`/linkdata/${id}`);
  }

  create(data) {
    return http.post("/linkdata", data);
  }

  update(id, data) {
    return http.put(`/linkdata/${id}`, data);
  }

  delete(id) {
    return http.delete(`/linkdata/${id}`);
  }

  // deleteAll() {
  //   return http.delete(`/linkdata`);
  // }

  findByUrl(url) {
    return http.get(`/linkdata?url=${url}`);
  }
}

export default new LinkService();