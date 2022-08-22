import TodosDAO from "../dao/todosDAO.js"

export default class TodosController {

  //
  // READ
  //
  static async apiGetTodos(req, res) {

    const { todosList, totalNumTodos } = await TodosDAO.getTodos({})

    let response = {
      todoList: todosList
    }
    res.json(response)
  }

  //
  // CREATE
  //
  static async apiPostTodo(req, res) {
    try {
      const name = req.body.name
      const priority = req.body.priority
      const description = req.body.description
      const todoResponse = await TodosDAO.addTodo(
        name,
        priority,
        description,
      )
      res.json({ status: "success add" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  //
  // DELETE
  // 
  static async apiDeleteTodo(req, res) {
    try {
      const todoId = req.body.id
      const todoResponse = await TodosDAO.deleteTodo(
        todoId
      )
      res.json({ status: "success delete" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async apiDeleteAll(req, res) {
    try {
      const todoResponse = await TodosDAO.deleteAll()
      res.json({ status: "success delete all" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  //
  // UPDATE
  // 
  static async apiUpdateTodo(req, res) {
    try {
      const todoId = req.query.id
      const todoPriority = req.query.p
      console.log(todoId, todoPriority);
      const todoResponse = await TodosDAO.updateTodo(
        todoId,
        todoPriority
      )
      console.log(todoId, todoPriority, todoResponse);  
      var { error } = todoResponse
      if (error) {
        res.status(400).json({ error })
      }

      res.json({ status: "success updated" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

}