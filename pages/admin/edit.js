import React, { useState, useEffect } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import {
  Grid,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import Head from 'next/head';
import Product from '../../models/Product';
import mongoose from "mongoose";

const Edit = ({ product }) => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')
  const [price, setPrice] = useState('')
  const [availableQty, setAvailableQty] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async (token) => {
    setTitle(product.title)
    setSlug(product.slug)
    setDescription(product.desc)
    setImg(product.img)
    setPrice(product.price)
    setAvailableQty(product.availableQty)
  }

  const onchange = (e) => {
    if (e.target.name == 'title') {
      setTitle(e.target.value)
    }
    else if (e.target.name == 'slug') {
      setSlug(e.target.value)
    }
    else if (e.target.name == 'description') {
      setDescription(e.target.value)
    }
    else if (e.target.name == 'price') {
      setPrice(e.target.value)
    }
    else if (e.target.name == 'availableQty') {
      setAvailableQty(e.target.value)
    }
    else if (e.target.name == 'image') {
      setImg(e.target.value)
    }
  }
  const submitForm = async (e) => {
    e.preventDefault()
    const data = { id: product._id, title: title, slug: slug, desc: description, img: img, price: price, availableQty: availableQty }
    let res = await fetch('/api/updateproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    if (response.succses) {
      toast.success('Product Edited Succsesfully!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <Head><title>{'Admin -- Edit Product'}</title></Head>
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
              <BaseCard title="Edit Product">
                <Stack spacing={3}>
                  <TextField onChange={onchange} value={title} name="title" label="Title" variant="outlined" />
                  <TextField onChange={onchange} value={slug} name="slug" label="Slug" variant="outlined" />
                  <TextField onChange={onchange} value={description} name="description" label="Description" multiline rows={4} />
                  <TextField onChange={onchange} value={img} name="image" label="Image" variant="outlined" />
                  <TextField onChange={onchange} value={price} name="price" label="Price" variant="outlined" />
                  <TextField onChange={onchange} value={availableQty} name="availableQty" label="Available Quantity" variant="outlined" />
                </Stack>
                <br />
                <Button onClick={submitForm} variant="contained" mt={2}>
                  Submit
                </Button>
              </BaseCard>
            </Grid>
          </Grid>
        </FullLayout>
      </ThemeProvider>
    </>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI)
  }
  let product = await Product.findById(context.query.id)
  return {
    props: { product: JSON.parse(JSON.stringify(product)) } // will be passed to the page component as props
  }
}

export default Edit