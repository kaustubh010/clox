import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import { Grid } from "@mui/material";
import ProductPerfomance from "../../src/components/dashboard/ProductPerfomance";
import Head from 'next/head';

const Orders = () => {
  return (
    <><Head><title>{'Admin -- View All Orders'}</title></Head>
    <ThemeProvider theme={theme}>
      <style jsx global>{`
            footer {
            display: none;
            }
            header {
              display: none;
              }
      `}</style>
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <ProductPerfomance />
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
    </>
  );
}

export default Orders