import { todoItemNode } from "./todo-item.node";
import { todoRootNode } from "./todo-root.node";
import { addTodoNode } from "./add-todo.node";
import { currentTodoListNode } from "./current-todo-list.node";
import { nanoidNode } from "./nanoid.node";

const allNodeTypes = [
  todoItemNode,
  addTodoNode,
  currentTodoListNode,
  todoRootNode,
  nanoidNode
];

export {
  allNodeTypes,
  todoItemNode,
  addTodoNode,
  currentTodoListNode,
  todoRootNode,
  nanoidNode
};
