import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import AddTodo from "./components/add-todo";
import Todos from "./components/todos";
import DeleteTodo from "./components/delete-todo";
import UpdateTodo from "./components/update-todo";
import ReactNav from "./components/ReactNav";


function App() {

    return (
        <>
        {/* Homepage */}
        <ReactNav />
        <div className="container">
            <div className="row mt-4 mb-4 align-items-end">
                <div className="col-md-4"><AddTodo/></div>
                <div className="col-md-4"><DeleteTodo/></div>
                <div className="col-md-4"><UpdateTodo/></div>
            </div>
        </div>
        <Todos/>
        </>
    );


}
export default App;
