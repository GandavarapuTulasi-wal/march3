import { useState,useContext} from 'react'
import TodoObContext from './TodoObContext'
function TodoForm() {
    const [item,setItem]=useState("")
    const [status,setStatus]=useState("complete")
    const {dispatch} = useContext(TodoObContext)

    return (
        <div className="card-container">
            <div>
                <h1>Todos App</h1>
                <div className="box">
                <input type="text" name="item" placeholder="Enter Todo" className="todo-user-input" onInput={(event)=>{setItem(event.target.value)}}/>
                <select name="status" className="todo-user-input" onChange={(event)=>{setStatus(event.target.value)}}>
                    <option value="complete">Complete</option>
                    <option value="incomplete">incomplete</option>
                </select>
                <div className="card">
             <button onClick={()=>{dispatch({type: "add",item:item,status:status});}}>Add</button>
             <button onClick={()=>{dispatch({type: "clear"})}}>Remove All</button>
             </div>
             </div>

            </div>

        </div>
    )

}
export default TodoForm