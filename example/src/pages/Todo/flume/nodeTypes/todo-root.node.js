export const todoRootNode = {
  root: true,
  type: "todoRootNode",
  label: "计划簿",
  description: "任务计划",
  inputs: ports => [
    ports.todoList({
      name: "todoList",
      label: "计划列表"
    })
  ]
};
