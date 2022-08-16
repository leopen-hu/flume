export const todoItemNode = {
  type: "todoItemNode",
  label: "计划项",
  description: "计划项的生成",
  // inputs: ports => [
  //   ports.string({
  //     name: "id",
  //     label: "计划编号"
  //   }),
  //   ports.string({
  //     name: "name",
  //     label: "计划名称"
  //   }),
  //   ports.boolean({
  //     name: "isCompleted",
  //     label: "是否完成？"
  //   })
  // ],
  outputs: ports => [
    ports.todoItem({
      name: "todoItem",
      label: "计划项"
    })
  ],
  resolve: (node, inputValues, nodeType, context) => {
    return {
      todoItem: {
        ...context.todoItem
      }
    };
  }
};
