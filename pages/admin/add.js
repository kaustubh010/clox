import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";

const Add = () => {
  return (
    <ThemeProvider theme={theme}>
        <FullLayout>
          Hello add
        </FullLayout>
    </ThemeProvider>
);
}

export default Add