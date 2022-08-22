import http from "../http-common";

class TodoDataService {
    async getAll() {
      return http.get(``);
    }
    async createTodo(data) {
      return http.post("/add", data);
    }
    async updateTodo(todoId, priority) {
      return http.put(`/update?id=${todoId}&p=${priority}`);
    }
    async deleteTodo(id) {
      return http.delete('/delete',{'data': {id}});
    }
    async deleteAll() {
      return http.delete('/delete-all');
    }
  }
  
  export default new TodoDataService();