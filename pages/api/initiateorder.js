// Next,js API route support: https://nextjs,org/docs/api-routes/introduction
import Order from "../../models/Order"
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
  // Check if the cart is tampered with -- 
  let product, sumTotal = 0;
  let cart = req.body.cart;
  if (req.body.subTotal <= 0) {
    res.status(200).json({ succses: false, "error": "Your Cart is empty. Please build your cart and try again.", clear: false })
    return;
  }
  for (let item in cart) {
    sumTotal += cart[item].price * cart[item].qty
    product = await Product.findOne({ slug: item })
    // Check if the cart items are out of stock --
    if (product.availableQty < cart[item].qty) {
      res.status(200).json({ succses: false, "error": "Some items in your cart went out of Stock. Please try again", clear: true })
      return;
    }
    if (product.price != cart[item].price) {
      res.status(200).json({ succses: false, "error": "The price of some items in your cart have changed. Please try again", clear: true })
      return
    }
    if (sumTotal !== req.body.subTotal) {
      res.status(200).json({ succses: false, "error": "The price of some items in your cart have changed. Please try again", clear: true })
      return
    }
  }

  // Check if details are valid --
  if (req.body.phone.length !== 10 || isNaN(req.body.phone)) {
    res.status(200).json({ succses: false, "error": "Please enter your 10 digit Phone Number", clear: false })
    return
  }

  if (req.body.pincode.length !== 6 || isNaN(req.body.pincode)) {
    res.status(200).json({ succses: false, "error": "Please enter your 6 digit pincode", clear: false })
    return
  }

  let order = new Order({
    email: req.body.email,
    orderId: req.body.oid,
    address: req.body.address,
    amount: req.body.subTotal,
    products: req.body.cart
  })
  await order.save()
  res.status(200).json({ succses: "succses", order: order._id })

  // Initiate stock api
  const data = {orderId: req.body.oid}
  let b = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/outofstock`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  await b.json()
}

export default connectDb(handler);