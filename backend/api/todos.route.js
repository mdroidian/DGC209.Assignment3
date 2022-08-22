import express from "express"
import TodosCtrl from "./todos.controller.js"

const router = express.Router()

router
  .route("/")
  .get(TodosCtrl.apiGetTodos)
router
  .route("/add")
  .post(TodosCtrl.apiPostTodo)
router
  .route("/update")
  .put(TodosCtrl.apiUpdateTodo)
router
  .route("/delete")
  .delete(TodosCtrl.apiDeleteTodo)
router
  .route("/delete-all")
  .delete(TodosCtrl.apiDeleteAll)

export default router