import React, { useState } from "react";
import TodoDataService from "../services/todos"

function AddTodo() {

    const [todoName, setTodo] = useState("");
    const [todoPriority, setPriority] = useState("");
    const [todoDescription, setDescription] = useState("");

    const handleInputChange = event => {
        setTodo(event.target.value);
      };
    const handleInputChange2 = event => {
        setPriority(event.target.value);
      };
    const handleInputChange3 = event => {
        setDescription(event.target.value);
      };

    const handleSubmit = event => {
        event.preventDefault();
    };

    const saveTodo = () => {
        const data = {
          name: todoName,
          priority: todoPriority,
          description: todoDescription
        };
        // console.log(data);
        TodoDataService.createTodo(data)
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div className="container mt-1 mb-1 justify-content-center">
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-sm-12">
                    <input
                        placeholder="Name"
                        type="text"
                        className="form-control mt-2"
                        id="todoName"
                        required
                        value={todoName}
                        onChange={handleInputChange}
                        name="todoName"
                    />
                </div>
                <div className="col-sm-12">
                    <input
                        placeholder="Priority"
                        type="number"
                        className="form-control mt-2"
                        id="todoPriority"
                        required
                        value={todoPriority}
                        onChange={handleInputChange2}
                        name="todoPriority"
                    />
                </div>
                <div className="col-sm-12">
                    <input
                        placeholder="Description"
                        type="text"
                        className="form-control mt-2"
                        id="todoDescription"
                        required
                        value={todoDescription}
                        onChange={handleInputChange3}
                        name="todoDescription"
                    />
                </div>
                    <div className="input-group mt-2">
                        <button onClick={saveTodo} className="btn btn-success mx-auto col-12 ">Add Todo</button>
                    </div>
            </form>
        </div>
    );
};
  
export default AddTodo;
