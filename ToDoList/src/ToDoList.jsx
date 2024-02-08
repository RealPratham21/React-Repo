import { useState } from "react";
function Element(){
    const [tasks, setTasks] = useState([]);
    const [newtask, setnewTask] = useState("");
    function updateNewTask(element){
        setnewTask(element.target.value);
    }
    function addTask(){
        if (newtask.trim() != ""){
            setTasks(prevTask => [...prevTask, newtask]);
            setnewTask("");
            document.getElementById('TextZone').value = "";
        }
        else{
            window.alert("Enter something greater 1 characters!");
        }
    }
    function removeTask(index){
        setTasks(tasks.filter((_, idx) => idx != index));
    }
    function upTask(index){
        if (index > 0){
            const updateNewTask = [...tasks];
            [updateNewTask[index], updateNewTask[index-1]] = [updateNewTask[index-1], updateNewTask[index]];
            setTasks(updateNewTask);
        }
        else{
            window.alert("It is the first Element!");
        }
    }
    function downTask(index){
        if (tasks.length - 1 > index){
            const updateNewTask = [...tasks];
            [updateNewTask[index], updateNewTask[index+1]] = [updateNewTask[index+1], updateNewTask[index]];
            setTasks(updateNewTask);
        }
        else{
            window.alert("It is the last Element!");
        }
    }
    return(
        <div className="parentDiv">
            <h1 className="Heading">To-Do List</h1>
            <div className="inputitems">
                <input type="text" onChange={(element) => updateNewTask(element)} placeholder="Set Tasks.." id="TextZone"></input>
                <button onClick={addTask}>Add</button>
            </div>
            <div className="listofitems">
                    {tasks.map((data, index) => <div key={index} className="listed-item"><span className="mainText">{data}</span><div className="options"><button className="trash" onClick={() => removeTask(index)}>🗑</button><button className="up" onClick={() => upTask(index)}>🆙</button><button className="downTask" onClick={() => downTask(index)}>⏬</button></div></div>)}
            </div>
        </div>
    );
}
export default Element