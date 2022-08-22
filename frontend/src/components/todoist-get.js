import React, { useState } from "react";
import { TodoistApi } from '@doist/todoist-api-typescript'
import TodoDataService from "../services/todos"
import { Link } from "react-router-dom";

function TodoistGet() {
    
    // DEMO
    // let api = new TodoistApi(process.env.REACT_APP_TODOIST_API)
    // let pID = process.env.REACT_APP_TODOIST_PID

    const [apiToken, setAPI] = useState("");
    const [projectID, setProjectID] = useState("");
    const [added, setAdded] = useState(null);
    const [todoists, setTodos] = useState([]);

    const handleInputChange = event => {
        setAPI(event.target.value);
      };
    const handleInputChange2 = event => {
        setProjectID(event.target.value);
      };
   
    function getTodoist(){
        // uncomment these for PROD
        let api = new TodoistApi(apiToken)
        let pID = projectID

        if(!apiToken || !apiToken.length){
            alert("Enter Todoist API")
        }
        else if(!pID || !pID.length){
            alert("Enter Project ID")

        } else {
        api.getTasks({project_id: pID})
        .then((tasks) => {
            console.log(tasks);
            setTodos(tasks);
        })
        .catch((error) => console.log(error))
    }
    }

    function addAllToDb(){
        if(!todoists || !todoists.length){
            console.log(todoists.length);
            console.log("Get Todos First");
            alert("Get Todos First")
        }
        else {
            console.log(todoists.length);
            todoists.map(atodo => {

            const data = {
            name: atodo.content,
            priority: atodo.priority,
            description: atodo.description
            };

            TodoDataService.createTodo(data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                })
            
            })

            setAdded(
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <div className="alert alert-success text-center" role="alert">
                        Added.  Go to the <Link className="text-decoration-none" to="/">Homepage.</Link>
                    </div>
                </div>
            </div>
            )
        }
    }

    return (

        <div className="container">
            <div className="modal modal-alert position-static d-block " id="modalChoice">
                <div className="modal-dialog">
                    <div className="modal-content rounded-3 shadow">
                        <div className="modal-body p-4 text-center">
                            <h5 className="mb-0">Enter Todoist API Token</h5>
                            <input
                                type="text"
                                className="form-control"
                                id="todoName"
                                required
                                value={apiToken}
                                onChange={handleInputChange}
                                name="todoName"
                            />
                            <p className="mb-0">Enter Project ID</p>
                            <input
                                type="text"
                                className="form-control"
                                id="projectID"
                                required
                                value={projectID}
                                onChange={handleInputChange2}
                                name="projectID"
                            />
                        </div>
                        <div className="modal-footer flex-nowrap p-0">
                            <button type="button" onClick={getTodoist} 
                            className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end">
                                <strong>Get Todos</strong></button>
                            <button type="button"  onClick={addAllToDb}
                            className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal">
                                Add All To Database</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alert Added To DB */}
            {added}
            
            <div className="row">
            
                {   todoists.map((atodo) => {
                        return (
                            <div className="col-lg-4 pb-1">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-title">{atodo.content}</p>
                                        <p className="card-text">
                                            <strong>Priority: </strong>{atodo.priority}<br />
                                            <strong>Description: </strong>{atodo.description}
                                        </p>
                                        <p><cite title="todoId">{atodo.id}</cite></p>
    
                                    </div>
                                </div>
                            </div>
                        );
                })}

            </div>
        </div>

    );
};

export default TodoistGet;
