import { Colors } from "node-editor";

export const todoListPort = {
  type: "todoList",
  name: "todoList",
  label: "计划列表",
  color: Colors.orange,
  resolve: (portType, data, context) => {
    return data.todoList || [];
  }
};
