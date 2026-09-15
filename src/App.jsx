import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskCard from "./components/TaskCard";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React components and props"
    },
    {
      id: 2,
      title: "Practice Java",
      description: "Learn Java OOP concepts"
    }
  ]);

  function addTask() {

    const newTask = {
      id: Date.now(),
      title: "Learn Spring Boot",
      description: "Learn Spring Boot basics"
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <Navbar
        name="Naveen"
        role="Student"
      />

      <h1>My Tasks</h1>

      <button onClick={addTask}>
        Add Task
      </button>

      {tasks.map(task => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </>
  );
}

export default App;