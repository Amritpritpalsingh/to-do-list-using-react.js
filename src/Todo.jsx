import "./Todo.css"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){

    let [tasks,setTasks] = useState([{task:"I Am A Sample Task",id:uuidv4(),isDone:false}]);
    let [todos,setTodos]= useState(''); 
    let newTask = (event)=>{
        setTodos(event.target.value)
    }
    let addTodo =()=>{
    setTasks((prevTodos)=>{return[...prevTodos,{id:uuidv4(),isDone:false,task:todos}]})
    setTodos("")
    }
    let deleteTask = (id)=>{
        setTasks((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
    let doneTask = (id)=>{
        setTasks((prevTodos) => { 
            return prevTodos.map((todo) => {    
                if(todo.id == id){
                    return {...todo,isDone:!todo.isDone}   
                }
                else{
                    return todo;
                }          
            });  
        });
    }
        
    return(
        <>
        <h1 style={{textAlign:"center"}}>To Do List</h1>
    <div className="Todo-con">
        <div className="header">
        <input type="text" className="input" name="" id="" value={todos} onChange={newTask}  />
        <button onClick={addTodo}  >Add Task</button></div>
        <div>
            <h3>To Do </h3>
        <ol>
            {tasks.map((todo,ind)=>( <div className="tasks-btn"><li key={ind} style={todo.isDone ===true ? { textDecoration: "line-through" } : null}  onDoubleClick={()=>{deleteTask(todo.id)}}  >{todo.task}</li>
            <input  type="checkbox" name="" id="" className="input" onClick={()=>{doneTask(todo.id)}} />
            </div>))}
        </ol>
        </div>
    </div></>
    )
    }