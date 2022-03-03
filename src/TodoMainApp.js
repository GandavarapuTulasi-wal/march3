import { useReducer } from "react";
import TodoForm from "./TodoForm";
import TodoObContext from './TodoObContext'
import TodoReducer from './TodoReducer'
import TodoList from './TodoList'
const TodoMainApp = () => {
    const todoOb=[{ item: "Cook Breakfast", status: "Complete" }, { item: "do Coding", status: "incomplete" }]
     const [state,dispatch] = useReducer(TodoReducer,todoOb);
     const reducerValue={state,dispatch}
     return (
         <div>
            <TodoObContext.Provider value={reducerValue}>
               <TodoForm/>
               <TodoList/>
            </TodoObContext.Provider>
         </div>
     );
 }
export default TodoMainApp;