export const setEditorValue = (value: string) => {
  return {
    type: "SET_EDITOR_VALUE",
    payload: {
      value,
    },
  };
};
