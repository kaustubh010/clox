import React from "react";
import {
  Typography,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import Link from "next/link"

const AllProducts = ({ products }) => {
  return (
    <BaseCard title="All Products">
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Title
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Slug
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Price
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.map((product) => (
            <TableRow key={product._id}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {product.title}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {product.slug}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                    </Typography>
                  </Box>
                  <img style={{ height: '50px', width: '50px', margin: '0 30px' }} src={product.img} alt="" />
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                ₹{product.price}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">
                  <Link href={'/admin/edit?id=' + product._id}><Button variant="outlined" color="error">
                    Edit
                  </Button></Link>
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default AllProducts;
