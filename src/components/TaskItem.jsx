import React from 'react';

const TaskItem = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div onClick={() => onToggle(task.id)}>
        <strong>{task.name}</strong>: {task.description}
      </div>
      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
