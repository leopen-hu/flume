export const currentTodoListNode = {
  type: "currentTodoListNode",
  label: "当前计划列表",
  description: "当前已存在的计划列表",
  outputs: ports => [
    ports.todoList({
      name: "currentTodoList",
      label: "计划列表"
    })
  ],
  resolve: (node, inputValues, nodeType, context) => {
    return {
      currentTodoList: [...context.todoList]
    };
  }
};
