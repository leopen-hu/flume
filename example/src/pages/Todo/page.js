import React, { useState } from "react";
import { Input, Checkbox } from "antd";
import { nanoid } from "nanoid";
import { createEngine } from "./flume/engine";
import { isEqual } from "lodash";
import "./editor.css";

const context = {
  entities: {
    task: {
      name: "task",
      label: "任务",
      properties: {
        id: {
          name: "id",
          label: "编号",
          type: "string"
        },
        title: {
          name: "title",
          label: "标题",
          type: "string"
        },
        description: {
          name: "description",
          label: "描叙",
          type: "string"
        },
        status: {
          name: "status",
          label: "状态",
          type: "enums.taskStatus"
        }
      }
    }
  },
  enums: {
    taskStatus: {
      name: "taskStatus",
      label: "任务状态",
      options: [
        { name: "init", label: "未开始", value: "init" },
        { name: "started", label: "已开始", value: "started" },
        { name: "completed", label: "已完成", value: "completed" }
      ]
    }
  }
};

export const TodoPage = () => {
  const [todo, setTodo] = useState({});
  const [todoList, setTodoList] = useState([]);
  const nodes = JSON.parse(localStorage.getItem("todo-logic"));
  const engine = createEngine(context);

  const onTodoChange = e => {
    console.log(e.target.value);
    setTodo({
      id: nanoid(10),
      name: e.target.value
    });
  };

  const addTodo = () => {
    console.log({ nodes, todo, todoList });
    const { todoList: nextTodoList = [] } = engine.resolveRootNode(nodes, {
      context: { todoItem: todo, todoList: [...todoList] }
    });

    if (!isEqual(todoList, nextTodoList)) {
      setTodoList([...nextTodoList]);
      setTodo({});
    }
  };

  const onTodoCheck = todoId => {
    const todoItem = todoList.find(todoItem => todoItem.id === todoId);
    const { todoList: nextTodoList = [] } = engine.resolveRootNode(nodes, {
      context: {
        todoItem: { ...todoItem, isCompleted: !todoItem.isCompleted },
        todoList: [...todoList]
      }
    });
    console.log({ nextTodoList });
    setTodoList([...nextTodoList]);
  };

  return (
    <div className="page">
      <Input value={todo.name} onChange={onTodoChange} onPressEnter={addTodo} />
      <ul>
        {todoList.map(todoItem => (
          <li key={todoItem.id}>
            <Checkbox
              onChange={() => {
                onTodoCheck(todoItem.id);
              }}
            >
              <span
                style={{
                  textDecoration: todoItem.isCompleted ? "line-through" : "none"
                }}
              >
                {todoItem.name}
              </span>
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
};
