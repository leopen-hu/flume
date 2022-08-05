import { Controls, Colors } from "node-editor";

export const stringPort = {
  type: "string",
  name: "string",
  label: "文字",
  acceptTypes: ["string"],
  color: Colors.green,
  controls: [
    Controls.text({
      name: "text",
      label: "文字"
    })
  ],
  resolve: (portType, data, context) => {
    return data.text;
  }
};
