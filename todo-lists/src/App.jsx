
import { useState } from "react";
function Todo(){
    const [task, setTask] = useState("");
    const [lists, setLists] = useState([]);
    const handleChange = (e) => {
        if(task === ""){
            alert("Please enter a task");
        }else{
            setLists([...lists, task]);
            setTask("");
        }
        
    }
    const remove = (index) => {
        setLists(lists.filter((task, i) => i !== index));
    }
   return(
    <div>
        <h2 className="title">My TODO Lists</h2>
    <input className="input" type="text" placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)}/><br></br><br></br>
    <button onClick={handleChange} className="btn">Add Tasks</button>
    <ul>
        {lists.map((task, index) => (
            <li className="tasks" key={index}>
                {task}
                 <button className="btn2" onClick={() => remove(index)}>x</button>
            </li>
        ))}
    </ul>
    </div>
   )
}
export default Todo;