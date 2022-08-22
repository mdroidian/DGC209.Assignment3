import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let todos

export default class TodosDAO {
  static async injectDB(conn) {
    if (todos) {
      return
    }
    try {
      todos = await conn.db(process.env.TODOS_NS).collection("todos")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in todoDAO: ${e}`,
      )
    }
  }

  //
  // CREATE
  //
  static async addTodo(name, priority, description) {
    try {
      const newTodo = { 
            name: name,
            priority: priority,
            description: description
        }
      return await todos.insertOne(newTodo)
    } catch (e) {
      console.error(`Unable to add todo: ${e}`)
      return { error: e }
    }
  }

  //
  // READ
  //

  static async getTodos(){
    try {
      const getResponse = await todos.find({})
      const todosList = await getResponse.toArray()
      return { todosList: todosList }
    } catch (e) {
      console.error(`Unable to delete todo: ${e}`)
      return { error: e }
    }
  }

  //
  // DELETE
  // 
  static async deleteTodo(todoId) {
    try {
      const deleteResponse = await todos.deleteOne({
        _id: ObjectId(todoId),
      })
      return deleteResponse
    } catch (e) {
      console.error(`Unable to delete todo: ${e}`)
      return { error: e }
    }
  }

  static async deleteAll() {
    try {
      const deleteResponse = await todos.deleteMany({})
      return deleteResponse
    } catch (e) {
      console.error(`Unable to delete all todos: ${e}`)
      return { error: e }
    }
  }

  //
  // UPDATE
  // 
  static async updateTodo(todoId, todoPriority) {
    try {
      const updateResponse = await todos.updateOne(
        { _id: ObjectId(todoId)},
        { $set: { priority: todoPriority } },
      )
      console.log(todoId, todoPriority, updateResponse);  
      return updateResponse
    } catch (e) {
      console.error(`Unable to update todo: ${e}`)
      return { error: e }
    }
  }
}