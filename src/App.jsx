import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, description) => {
    const newTask = {
      id: Date.now(),
      name,
      description,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id, newName, newDescription) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, name: newName, description: newDescription } : task
    ));
    setCurrentTask(null);
  };

  const editCurrentTask = (id) => {
    const task = tasks.find(task => task.id === id);
    setCurrentTask(task);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editTask={editTask} currentTask={currentTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} onEdit={editCurrentTask} />
    </div>
  );
};

export default App;
