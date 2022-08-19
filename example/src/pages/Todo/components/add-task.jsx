import { nanoid } from "nanoid";
import { createContext, useContext, useReducer, useState } from "react";

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);

  function addTask({ id, text, done }) {
    setTasks([
      ...tasks,
      {
        id: id || nanoid(10),
        text: text,
        done: done || false
      }
    ]);
  }

  function updateTask(updatedTask) {
    setTasks(
      tasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
  }

  function deleteTask(deletedTask) {
    setTasks(tasks.filter(task => task.id !== deleteTask.id));
  }

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider
        value={{ addTask, updateTask, deleteTask }}
      >
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function addTask(tasks, { id, text, done }) {
  return [
    ...tasks,
    {
      id: id || nanoid(10),
      text: text,
      done: done || false
    }
  ];
}

function updateTask(tasks, updatedTask) {
  return tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
}

function deleteTask(tasks, deletedTask) {
  return tasks.filter(task => task.id !== deleteTask.id);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return addTask(tasks, { id: action.id, text: action.text });
    }
    case "changed": {
      return updateTask(tasks, action.task);
    }
    case "deleted": {
      return deleteTask(tasks, action.task);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false }
];
