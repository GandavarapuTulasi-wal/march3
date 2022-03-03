import { useContext } from 'react'
import TodoObContext from './TodoObContext'
const TodoList = () => {
    const { state, dispatch } = useContext(TodoObContext)
    return (
        <div>
            <h1>My Todos</h1>
            {state.map((val, index) => (
                <div className="card">
                    <div className="item">Item: {val.item}</div>
                    <div className="item">Status: {val.status}</div>
                    <button className="delete" onClick={() => {dispatch({type: "delete",index:index}); }}>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default TodoList