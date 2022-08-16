import { Colors } from "node-editor";

export const createEntityPorts = entities => {
  return Object.values(entities).map(({ name, label }) => ({
    type: name,
    name,
    label,
    acceptTypes: [name],
    color: Colors.purple,
    resolve: (portType, data, context) => {
      return { ...data };
    }
  }));
};
