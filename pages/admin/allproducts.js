import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";

const Allproducts = () => {
  return (
    <ThemeProvider theme={theme}>
        <FullLayout>
          Hello products
        </FullLayout>
    </ThemeProvider>
);
}

export default Allproducts