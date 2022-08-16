import { FlumeConfig } from "node-editor";
import { allPortTypes } from "./portTypes";
import { allNodeTypes } from "./nodeTypes";
import { createEnumPorts } from "./portTypes/enum-port-factory";
import { createEntityPorts } from "./portTypes/entity-port-factory";
import { createEntityNodes } from "./nodeTypes/entity-node-factory";

export const createFlumeConfig = context => {
  const flumeConfig = new FlumeConfig();

  allPortTypes.forEach(portType => {
    flumeConfig.addPortType(portType);
  });

  allNodeTypes.forEach(nodeType => {
    flumeConfig.addNodeType(nodeType);
  });

  // enum ports
  if (context.enums) {
    createEnumPorts(context.enums).forEach(port =>
      flumeConfig.addPortType(port)
    );
  }

  // enum ports
  if (context.entities) {
    createEntityPorts(context.entities).forEach(port =>
      flumeConfig.addPortType(port)
    );
    createEntityNodes(context.entities).forEach(port =>
      flumeConfig.addNodeType(port)
    );
  }

  return flumeConfig;
};
