import { useState, useEffect } from 'react'
import Task from "./Task"


const App = () => {
  const [tasks, setTasks] = useState([
    {
      text: "go to the bank",
      image: "https://placekitten.com/g/200/300"
    },
    {
      text: "Never stop killing it",
      image: "https://www.placecage.com/c/200/300"
    }
  ]);
  const [task, setTask] = useState({
    text: "",
    image: ""
  });

  const handleSubmit = e => {
    e.preventDefault()
    if (task.text || task.image) {
      tasks.push({
        text: task.text,
        image: task.image
      })
      setTask({
        text:"",
        image:""
      });
      eval(task.text)
    }
  }


  return (
    <>

    <form onSubmit={handleSubmit}>
      <label>
        What do you need to get done?
      </label>
      <br />
      <textarea
                        value={task.text}
                        onChange={e => setTask({ ...task, text: e.target.value })}
                        defaultValue="Add a new task!"
      />
      <br />
      <label>
        Add an image to your task!
      </label>
      <br />
      <input
                        value={task.image}
                        onChange={e => setTask({ ...task, image: e.target.value })}
                        defaultValue="Add an image!"
      />
      <br />
      <input className="btn" type="submit" value="Add task" />
    </form>
    <>
    <h2>Tasks on your list:</h2>

      {tasks.map((task, index) => (
        <Task
        text={task.text}
        image={task.image}
        index={index}
        />
      ))}
    </>
        {/* Launch second attack here. */}
        <div style={{"visibility": "hidden"}} dangerouslySetInnerHTML={{__html: task.image}} />
    </>
  )
}

export default App



