import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";

const Imageuploder = () => {
  return (
    <ThemeProvider theme={theme}>
        <FullLayout>
          Hello Image
        </FullLayout>
    </ThemeProvider>
);
}

export default Imageuploder