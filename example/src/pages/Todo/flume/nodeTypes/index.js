import { todoItemNode } from "./todo-item.node";
import { todoRootNode } from "./todo-root.node";
import { addTodoNode } from "./add-todo.node";
import { currentTodoListNode } from "./current-todo-list.node";
import { nanoidNode } from "./nanoid.node";
import { dynamicRootNode } from "./dynamic-root.node";
import { passInContextNode } from "./dynamic-start.node";

const allNodeTypes = [
  todoItemNode,
  addTodoNode,
  currentTodoListNode,
  todoRootNode,
  nanoidNode,
  dynamicRootNode,
  passInContextNode
];

export {
  allNodeTypes,
  todoItemNode,
  addTodoNode,
  currentTodoListNode,
  todoRootNode,
  nanoidNode,
  dynamicRootNode,
  passInContextNode
};
