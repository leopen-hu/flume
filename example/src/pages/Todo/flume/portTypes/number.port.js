import { Controls, Colors } from "node-editor";

export const numberPort = {
  type: "number",
  name: "number",
  label: "数字",
  acceptTypes: ["number"],
  color: Colors.red,
  controls: [
    Controls.number({
      name: "number",
      label: "数字",
      defaultValue: 0
    })
  ],
  resolve: (portType, data, context) => {
    return data.number;
  }
};
