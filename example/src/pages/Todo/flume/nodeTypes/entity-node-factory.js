export const createEntityNodes = entities => {
  const nodes = [];

  Object.values(entities).forEach(
    ({ name, label, properties, identifyKeys = ["id"] }) => {
      const entityNode = {
        type: name,
        label: `新建${label}`,
        description: "",
        inputs: ports =>
          Object.values(properties).map(property => {
            const {
              name: propName,
              type: propType,
              label: propLabel
            } = property;
            return ports[propType]({
              name: propName,
              label: propLabel
            });
          }),
        outputs: ports => [
          ports[name]({
            name,
            label
          })
        ],
        resolve: (portType, data, context) => {
          return { [name]: { ...data[name] } };
        }
      };

      const addToListNode = {
        type: `${name}AddToList`,
        label: `${label}加入列表`,
        description: "",
        inputs: ports => {
          return [
            ports[name]({
              name,
              label: `待添加${label}`
            }),
            ports[`${name}List`]({
              name: `${name}List`,
              label: `原${label}列表`
            })
          ];
        },
        outputs: ports => {
          return [
            ports[`${name}List`]({
              name: `${name}List`,
              label: `新${label}列表`
            })
          ];
        },
        resolve: (node, inputValues, nodeType, context) => {
          console.log(`resolve ${name}AddToList`, {
            node,
            inputValues,
            nodeType,
            context,
            identifyKeys
          });
          let nextList = [...inputValues[`${name}List`]];
          const toAddItem = { ...inputValues[name] };
          if (inputValues[name]) {
            const isExist = !!nextList.find(item => {
              let equal = true;
              let i = 0;
              while (i < identifyKeys.length && equal) {
                let key = identifyKeys[i];
                equal = item[key] === toAddItem[key];
              }
              return equal;
            });

            console.log({ isExist, toAddItem });

            if (!isExist) {
              nextList.push(toAddItem);
            }
          }

          console.log({ [`${name}List`]: nextList });
          return { [`${name}List`]: nextList };
        }
      };

      nodes.push(entityNode, addToListNode);
    }
  );
  return nodes;
};
