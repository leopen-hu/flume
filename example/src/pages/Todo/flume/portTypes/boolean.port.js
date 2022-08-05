import { Controls, Colors } from "node-editor";

export const booleanPort = {
  type: "boolean",
  name: "boolean",
  label: "是/否",
  color: Colors.blue,
  acceptTypes: ["boolean"],
  controls: [
    Controls.checkbox({
      name: "boolean",
      label: "是/否",
      defaultValue: false
    })
  ],
  resolve: (portType, data, context) => {
    return data.boolean;
  }
};
