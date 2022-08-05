import { FlumeConfig } from "node-editor";
import { allPortTypes } from "./portTypes";
import { allNodeTypes } from "./nodeTypes";

export const flumeConfig = new FlumeConfig();

allPortTypes.forEach(portType => {
  flumeConfig.addPortType(portType);
});

allNodeTypes.forEach(nodeType => {
  flumeConfig.addNodeType(nodeType);
});
