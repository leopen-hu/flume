import React, { useState } from "react";
import { NodeEditor } from "node-editor";
import { createFlumeConfig } from "./flume/config";
import "./editor.css";
import { useEffect } from "react";

const context = {
  entities: {
    task: {
      name: "task",
      label: "任务",
      identifyKeys: ["id"],
      properties: {
        id: {
          name: "id",
          label: "编号",
          type: "string"
        },
        title: {
          name: "title",
          label: "标题",
          type: "string"
        },
        description: {
          name: "description",
          label: "描叙",
          type: "string"
        },
        status: {
          name: "status",
          label: "状态",
          type: "enums.taskStatus"
        }
      }
    },
    test: {
      name: "test",
      label: "测试模型",
      identifyKeys: ["id"],
      properties: {
        id: {
          name: "id",
          label: "编号",
          type: "string"
        },
        title: {
          name: "title",
          label: "标题",
          type: "string"
        }
      }
    }
  },
  enums: {
    taskStatus: {
      name: "taskStatus",
      label: "任务状态",
      options: [
        { name: "init", label: "未开始", value: "init" },
        { name: "started", label: "已开始", value: "started" },
        { name: "completed", label: "已完成", value: "completed" }
      ]
    }
  }
};

export const TodoEditor = () => {
  const { flumeConfig } = createFlumeConfig(context);
  const initNodes = JSON.parse(localStorage.getItem("todo-logic"));
  const initComments = JSON.parse(localStorage.getItem("todo-logic-comments"));
  const [nodes, setNodes] = useState(initNodes);
  const [comments, setComments] = useState(initComments);

  const onNodesChange = targetNodes => {
    console.log(targetNodes);
    setNodes(targetNodes);
    localStorage.setItem("todo-logic", JSON.stringify(targetNodes));
  };

  const onCommentsChange = comments => {
    setComments(comments);
    localStorage.setItem("todo-logic-comments", JSON.stringify(comments));
  };

  return (
    <div className="wrapper">
      <NodeEditor
        portTypes={flumeConfig.portTypes}
        nodeTypes={flumeConfig.nodeTypes}
        nodes={nodes}
        comments={comments}
        context={context}
        onChange={onNodesChange}
        onCommentsChange={onCommentsChange}
        renderNodeHeader={(Wrapper, nodeType, actions) => {
          return (
            <Wrapper
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>{nodeType.label}</div>
              <div>{nodeType.root === true ? "根节点" : null}</div>
            </Wrapper>
          );
        }}
      />
    </div>
  );
};
