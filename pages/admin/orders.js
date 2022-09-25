import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";

const Orders = () => {
  return (
    <ThemeProvider theme={theme}>
        <FullLayout>
          Hello orders
        </FullLayout>
    </ThemeProvider>
);
}

export default Orders