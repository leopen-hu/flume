import { booleanPort } from "./boolean.port";
import { stringPort } from "./string.port";
import { numberPort } from "./number.port";
import { todoItemPort } from "./todo-item.port";
import { todoListPort } from "./todo-list.port";
import { nanoidPort } from "./nanoid.port";


const allPortTypes = [
  stringPort,
  booleanPort,
  numberPort,
  todoItemPort,
  nanoidPort,
  todoListPort
];

export {
  allPortTypes,
  stringPort,
  booleanPort,
  numberPort,
  todoItemPort,
  nanoidPort,
  todoListPort
};
