import { useState } from "react";

function TaskCard({ title, description, onDelete }) {

  const [completed, setCompleted] = useState(false);

  function handleComplete() {
    setCompleted(prev => !prev);
  }

  return (
    <div>
      <h3>{title}</h3>

      <p>{description}</p>

      <p>
        Status: {completed ? "Completed" : "Pending"}
      </p>

      <button onClick={handleComplete}>
        {completed ? "Completed" : "Complete"}
      </button>

      <button onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;