import { Colors, Controls } from "node-editor";

export const createEntityPorts = entities => {
  const ports = [];
  Object.values(entities).forEach(({ name, label }) => {
    const itemPort = {
      type: name,
      name: name,
      label,
      acceptTypes: [name],
      color: Colors.purple,
      resolve: (portType, data, context) => {
        return { ...data };
      }
    };
    const listPort = {
      type: `${name}List`,
      name: `${name}List`,
      label: `${label}列表`,
      acceptTypes: [`${name}List`],
      color: Colors.pink,
      resolve: (portType, data, context) => {
        return { ...data };
      }
    };
    ports.push(itemPort, listPort);
  });

  return ports;
};

export const createEntitiesMultiSelectPort = entities => ({
  type: "entitiesMultiSelectPort",
  name: "entitiesMultiSelectPort",
  label: "选择数据模型",
  color: Colors.red,
  controls: [
    Controls.multiselect({
      name: "entityNames",
      label: "模型名列表",
      options: (() => {
        let options = [];
        Object.values(entities).forEach(({ name, label }) => {
          options = options.concat([
            {
              value: name,
              label
            },
            {
              value: `${name}List`,
              label: `${label}列表`
            }
          ]);
        });
        return options;
      })()
    })
  ],
  resolve: (portType, data, context) => {
    console.log(data);
    return { ...data };
  }
});
