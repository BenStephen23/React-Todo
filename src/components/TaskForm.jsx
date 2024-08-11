import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, currentTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentTask) {
      setName(currentTask.name);
      setDescription(currentTask.description);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || description.trim() === '') {
      alert('Both fields are required');
      return;
    }

    if (currentTask) {
      editTask(currentTask.id, name, description);
    } else {
      addTask(name, description);
    }
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter task name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
