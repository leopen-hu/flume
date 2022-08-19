import { Controls, Colors } from "node-editor";

export const createParamSelectPort = (entities, portTypes) => ({
  type: "selectParamTypePort",
  name: "selectParamTypePort",
  label: "选择参数类型接口",
  controls: [
    Controls.select({
      name: "paramType",
      label: "选择入参类型",
      getOptions: (inputData, context) => {
        return Object.values(portTypes).map(({ name, label }) => ({
          value: name,
          label
        }));
      }
    })
  ],
  resolve: (portType, data, context) => {
    return data.paramType;
  }
});
