import React, { useState } from "react";
import TodoDataService from "../services/todos"

function DeleteTodo() {

    const [todoId, setId] = useState("");

    const handleInputChange = event => {
        setId(event.target.value);
      };
      
    const handleSubmit = event => {
        event.preventDefault();
    };

    const deleteTodo = async () => {
    
        
          TodoDataService.deleteTodo(todoId)
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
                <div className="col-sm-12 mt-2">
                    <button onClick={deleteTodo} className="btn btn-success mx-auto col-12">Delete Todo</button>
                </div>
            </form>
        </div>
    );
};

export default DeleteTodo;
