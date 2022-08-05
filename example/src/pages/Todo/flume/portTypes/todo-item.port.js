import { Controls, Colors } from "node-editor";
import { nanoid } from "nanoid";

export const todoItemPort = {
  type: "todoItem",
  name: "todoItem",
  label: "计划项",
  color: Colors.yellow,
  acceptTypes: ["todoItem"],
  controls: [
    Controls.text({
      name: "id",
      label: "计划编号",
      defaultValue: () => nanoid(10)
    }),
    Controls.text({
      name: "name",
      label: "计划名"
    }),
    Controls.checkbox({
      name: "isCompleted",
      label: "是否完成"
    })
  ],
  resolve: (portType, data, context) => {
    return {
      ...data
    };
  }
};
