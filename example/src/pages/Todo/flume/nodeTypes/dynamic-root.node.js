export const dynamicRootNode = {
  root: true,
  type: "dynamicRootNode",
  label: "动态根节点",
  description: "选择数据模型作为根节点input",
  inputs: ports => (inputData, connections, context) => {
    let dynamicPorts = [];
    if (inputData?.selectedEntities) {
      dynamicPorts = inputData?.selectedEntities?.entityNames?.map(
        entityName => {
          const isList = entityName.includes("List");
          const entity = isList ? entityName.replace("List", "") : entityName;
          const { label } = context.entities[entity];
          return ports[entityName]({
            name: entityName,
            label: isList ? `${label}列表` : `${label}`
          });
        }
      );
    }
    console.log({ inputData, connections, context, ports, dynamicPorts });
    return [
      ports.entitiesMultiSelectPort({
        name: "selectedEntities",
        label: "选择数据模型",
        hidePort: true
      }),
      ...dynamicPorts
    ];
  }
};
