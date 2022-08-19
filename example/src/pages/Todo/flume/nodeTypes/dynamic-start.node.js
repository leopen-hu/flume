export const passInContextNode = {
  type: "passInContextNode",
  label: "入参定义",
  description: "定义入参，在调用时通过 context 传入",
  inputs: ports => (inputData, connections, context) => {
    return [
      ports.selectParamTypePort({
        name: "paramType",
        label: "选择入参类型"
      }),
      ports.string({
        name: "paramName",
        label: "变量属性名"
      }),
      ports.string({
        name: "paramLabel",
        label: "变量名称"
      })
    ];
  },
  outputs: ports => (inputData, connections, context) => {
    if (
      inputData &&
      inputData.paramType &&
      inputData.paramName.text &&
      ports[inputData.paramType.paramType]
    ) {
      return [
        ports[inputData.paramType.paramType]({
          name: inputData.paramName.text,
          label: inputData.paramLabel.text || inputData.paramName.text
        })
      ];
    }
    return [];
  },
  resolve: (node, inputValues, nodeType, context) => {
    console.log("resolve passInContextNode", {
      node,
      inputValues,
      nodeType,
      context,
      ccc: inputValues.paramName
    });
    return {
      [inputValues.paramName]: context[inputValues.paramName]
    };
  }
};
