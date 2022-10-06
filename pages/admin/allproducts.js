import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import { Grid } from "@mui/material";
import AllProducts from "../../src/components/dashboard/AllProducts";
import Head from 'next/head';
import Product from '../../models/Product';
import mongoose from "mongoose";

const Allproducts = ({products}) => {

  return (
    <><Head><title>{'Admin -- View All Products'}</title></Head>
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
            <AllProducts products={products}/>
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongoose.connect(process.env.MONGODB_URI)
  let products = await Product.find()
  return {
      props: { products: JSON.parse(JSON.stringify(products)) } // will be passed to the page component as props
  }
}

export default Allproducts