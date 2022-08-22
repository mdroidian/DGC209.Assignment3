import express from "express"
import cors from "cors"
import todos from "./api/todos.route.js"

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: false})) // body parser (req.body.*) THX NAV
app.use(express.json())

app.use("/api/v1/todos", todos)
app.use("*", (req, res) => res.status(404).json( {error: "not found"}))

export default app