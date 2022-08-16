export const createEntityNodes = entities => {
  return Object.values(entities).map(({ name, label, properties }) => ({
    type: name,
    label: `新建${label}`,
    description: "",
    inputs: ports =>
      Object.values(properties).map(property => {
        const { name: propName, type: propType, label: propLabel } = property;
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
  }));
};
