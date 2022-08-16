export const nanoidNode = {
  type: "nanoidNode",
  label: "随机编号",
  description: "随机生成的编号",
  inputs: ports => [
    ports.nanoid({
      name: "id",
      label: "随机编号"
    })
  ],
  outputs: ports => [
    ports.string({
      name: "id",
      label: "随机编号"
    })
  ],
  resolve: (node, inputValues, nodeType, context) => {
    return {
      id: {
        ...inputValues.id
      }
    };
  }
};
