import React, { useState } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import {
  Grid,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";

const Add = () => {
  const [form, setForm] = useState({})
  const onchange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const submitForm = async (e) => {
    e.preventDefault()
    const data = {title: form.title, slug: form.slug, desc: form.description, img: form.img, price: form.price, availableQty: form.availableQty}
    let res = await fetch('/api/addproducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    if(response.succses){
        console.log(form)
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
            footer {
            display: none;
            }
      `}</style>
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <BaseCard title="Add a Product">
              <Stack spacing={3}>
                <TextField onChange={onchange} value={form.title ? form.title : ''} name="title" label="Title" variant="outlined" />
                <TextField onChange={onchange} value={form.slug ? form.slug : ''} name="slug" label="Slug" variant="outlined" />
                <TextField onChange={onchange} value={form.description ? form.description : ''} name="description" label="Description" multiline rows={4} />
                <TextField onChange={onchange} value={form.img ? form.img : ''} name="img" label="Image" variant="outlined" />
                <TextField onChange={onchange} value={form.price ? form.price : ''} name="price" label="Price" variant="outlined" />
                <TextField onChange={onchange} value={form.availableQty ? form.availableQty : ''} name="availableQty" label="Available Quantity" variant="outlined" />
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
  );
}

export default Add