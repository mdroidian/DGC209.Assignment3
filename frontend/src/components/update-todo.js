import React, { useState } from "react";
import TodoDataService from "../services/todos"

function UpdateTodo() {

    const [todoId, setId] = useState("");
    const [todoPriority, setPriority] = useState("");

    const handleInputChange = event => {
        setId(event.target.value);
      };
    const handleInputChange2 = event => {
        setPriority(event.target.value);
      };
    
      const handleSubmit = event => {
        event.preventDefault();
    };
      const updateTodo = async () => {

        TodoDataService.updateTodo(todoId, todoPriority)
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
                        placeholder="Todo ID"
                        type="text"
                        className="form-control mt-2"
                        id="todoID"
                        required
                        value={todoId}
                        onChange={handleInputChange}
                        name="todoID"
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
                <div className="col-sm-12 mt-2">
                    <button onClick={updateTodo} className="btn btn-success mx-auto col-12">
                        Update Todo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTodo;
