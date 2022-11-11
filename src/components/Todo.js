import { useState } from "react"

const Todo = (props) => {
    return (
        <div>
            <input type="checkbox" />
            <label>{props.children}</label>
            <span>
           <button onClick={props.onClickFn}>🗑️</button>
            </span>
            
        </div>
    )
}

export default Todo