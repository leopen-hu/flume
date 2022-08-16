import { Controls, Colors } from "node-editor";

export const createEnumPorts = enums => {
  return Object.values(enums).map(({ name, label, options }) => ({
    type: `enums.${name}`,
    name,
    label,
    acceptTypes: [name],
    color: Colors.purple,
    controls: [
      Controls.select({
        name,
        label,
        options
      })
    ],
    resolve: (portType, data, context) => {
      return data[name];
    }
  }));
};
