import React, { useState, useEffect } from "react";
import { NodeEditor } from "node-editor";
import { flumeConfig } from "./flume/config";
import { engine } from "./flume/engine";
import { isEqual } from "lodash";
import "./editor.css";

export const TodoEditor = () => {
  const [todoList, setTodoList] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log({ nodes });
    const { todoList: nextTodoList = [] } = engine.resolveRootNode(nodes, {
      context: { todoList: [...todoList] }
    });
    console.log(
      { todoList, nextTodoList },
      todoList.length,
      nextTodoList.length
    );
    if (!isEqual(todoList, nextTodoList)) {
      setTodoList([...nextTodoList]);
    }
  }, [nodes, todoList]);

  return (
    <div className="wrapper">
      <NodeEditor
        portTypes={flumeConfig.portTypes}
        nodeTypes={flumeConfig.nodeTypes}
        nodes={nodes}
        comments={comments}
        onChange={setNodes}
        onCommentsChange={setComments}
        // disableZoom
        // defaultNodes={[
        //   {
        //     type: "websiteAttributes",
        //     x: 400,
        //     y: -200
        //   }
        // ]}
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
