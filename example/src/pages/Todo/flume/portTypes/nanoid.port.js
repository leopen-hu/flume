import { Controls, Colors } from "node-editor";
import { nanoid } from "nanoid";

export const nanoidPort = {
  type: "nanoid",
  name: "nanoid",
  label: "随机编号",
  acceptTypes: ["nanoid", "string"],
  color: Colors.pink,
  controls: [
    Controls.text({
      name: "id",
      label: "随机编号",
      defaultValue: () => nanoid(10)
    })
  ],
  resolve: (portType, data, context) => {
    return {
      ...data
    };
  }
};
