export const addTodoNode = {
  type: "addTodoNode",
  label: "添加计划",
  description: "添加计划到计划列表",
  inputs: ports => [
    ports.todoItem({
      name: "todoItem",
      label: "待添加计划"
    }),
    ports.todoList({
      name: "todoList",
      label: "计划列表"
    })
  ],
  outputs: ports => [
    ports.todoList({
      name: "nextTodoList",
      label: "添加后计划列表"
    })
  ],
  resolve: (node, inputValues, nodeType, context) => {
    let nextTodoList = [...inputValues.todoList];
    if (inputValues.todoItem.id) {
      const todoItemIndex = context.todoList.findIndex(
        todo => todo.id === inputValues.todoItem.id
      );
      if (todoItemIndex !== -1) {
        nextTodoList.splice(todoItemIndex, 1, inputValues.todoItem);
      } else {
        nextTodoList.push(inputValues.todoItem);
      }
    }
    return { nextTodoList };
  }
};
