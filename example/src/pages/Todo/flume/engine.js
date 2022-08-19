import { RootEngine } from "node-editor";
import { createFlumeConfig } from "./config";

export const createEngine = context => {
  const { flumeConfig, portResolves, nodeResolves } = createFlumeConfig(
    context
  );

  const resolvePorts = (portType, data, context) => {
    return portResolves
      .find(_portType => _portType.type === portType)
      ?.resolve(portType, data, context);
  };

  const resolveNodes = (node, inputValues, nodeType, context) => {
    return nodeResolves
      .find(_node => _node.type === node.type)
      ?.resolve(node, inputValues, nodeType, context);
  };

  return new RootEngine(flumeConfig, resolvePorts, resolveNodes);
};
