import { FlumeConfig } from "node-editor";
import { allPortTypes } from "./portTypes";
import { allNodeTypes } from "./nodeTypes";
import { createEnumPorts } from "./portTypes/enum-port-factory";
import {
  createEntityPorts,
  createEntitiesMultiSelectPort
} from "./portTypes/entity-port-factory";
import { createEntityNodes } from "./nodeTypes/entity-node-factory";
import { createParamSelectPort } from "./portTypes/param-select-port-factory";

export const createFlumeConfig = context => {
  const flumeConfig = new FlumeConfig();
  const portResolves = [];
  const nodeResolves = [];

  allPortTypes.forEach(portType => {
    flumeConfig.addPortType(portType);
    portResolves.push({
      type: portType.type,
      resolve: portType.resolve
    });
  });

  // enum ports
  if (context.enums) {
    createEnumPorts(context.enums).forEach(port => {
      flumeConfig.addPortType(port);
      portResolves.push({
        type: port.type,
        resolve: port.resolve
      });
    });
  }

  if (context.entities) {
    createEntityPorts(context.entities).forEach(port => {
      flumeConfig.addPortType(port);
      portResolves.push({
        type: port.type,
        resolve: port.resolve
      });
    });
    const entitiesMultiSelectPort = createEntitiesMultiSelectPort(
      context.entities
    );
    flumeConfig.addPortType(entitiesMultiSelectPort);
    portResolves.push({
      type: entitiesMultiSelectPort.type,
      resolve: entitiesMultiSelectPort.resolve
    });
  }

  const paramSelectPort = createParamSelectPort(
    context.entities,
    flumeConfig.portTypes
  );
  flumeConfig.addPortType(paramSelectPort);
  portResolves.push({
    type: paramSelectPort.type,
    resolve: paramSelectPort.resolve
  });

  allNodeTypes.forEach(nodeType => {
    flumeConfig.addNodeType(nodeType);
    nodeResolves.push({
      type: nodeType.type,
      resolve: nodeType.resolve
    });
  });

  if (context.entities) {
    createEntityNodes(context.entities).forEach(port => {
      flumeConfig.addNodeType(port);
      nodeResolves.push({
        type: port.type,
        resolve: port.resolve
      });
    });
  }

  return {
    flumeConfig,
    portResolves,
    nodeResolves
  };
};
