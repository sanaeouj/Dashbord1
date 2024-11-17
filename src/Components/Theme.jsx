export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#ffffff",
              paper: "#ffffff",
            },
            text: {
              primary: "#000000",
              secondary: "#000000",
            },
          }
        : {
            background: {
              default: "#000000",
              paper: "#121212",
            },
            text: {
              primary: "#ffffff",
              secondary: "#ffffff",
            },
          }),
    },
  });