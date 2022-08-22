import React, { useState, useEffect } from "react";
import TodoDataService from "../services/todos";


//
//  ADD DELETE ALL
//
function Todos() {
    const [todos, setTodos] = useState([]);
    const [deleted, setDeleted] = useState(null);

    useEffect(() => {
        retrieveTodos();
    }, []);

    const retrieveTodos = () => {
        TodoDataService.getAll()
            .then(response => {
                console.log(response.data);
                setTodos(response.data.todoList);
            })
            .catch(e => {
                console.log(e);
            });
            setDeleted(null)
        };

        const deleteAll = () => {
            TodoDataService.deleteAll()
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });

                setDeleted(
                    <div className="row justify-content-md-center">
                        <div className="alert alert-danger text-center col-md-4" role="alert">
                            Deleted
                        </div>
                    </div>
                    )
        };

    const deleteTodos = () => {
        deleteAll();
      };
    const refreshList = () => {
        retrieveTodos();
      };


    return (
        <>   
        <div className="container">
            <div className="row">
            <div className="col-sm-6"><button onClick={refreshList} className="btn btn-secondary mb-2 mx-auto col-12">Get Todos | Refresh List</button></div>
            <div className="col-sm-6"><button onClick={deleteTodos} className="btn btn-danger mb-2 mx-auto col-12">Delete All</button></div>
            </div>
            {deleted}
            <div className="row">
                {todos.map((atodo) => {
                    const todo = `${atodo._id} ${atodo.name}, ${atodo.priority} ${atodo.description}`;

                    return (
                        <div className="col-lg-4 pb-1">
                            <div className="card">
                                <div className="card-body">
                                    <p>{atodo._id}</p>
                                    <h5 className="card-title">{atodo.name}</h5>
                                    <p className="card-text">
                                        <strong>Priority: </strong>{atodo.priority}<br />
                                        <strong>Description: </strong>{atodo.description}
                                    </p>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            
        </div>
        </>
    );

}

export default Todos;
