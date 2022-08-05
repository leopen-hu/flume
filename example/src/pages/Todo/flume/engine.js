import { RootEngine } from "node-editor";
import { flumeConfig } from "./config";
import { allPortTypes } from "./portTypes";
import { allNodeTypes } from "./nodeTypes";

const resolvePorts = (portType, data, context) => {
  return allPortTypes
    .find(_portType => _portType.type === portType)
    ?.resolve(portType, data, context);
};
const resolveNodes = (node, inputValues, nodeType, context) => {
  return allNodeTypes
    .find(_node => _node.type === node.type)
    ?.resolve(node, inputValues, nodeType, context);
};

export const engine = new RootEngine(flumeConfig, resolvePorts, resolveNodes);
