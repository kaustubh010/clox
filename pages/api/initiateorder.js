// Next,js API route support: https://nextjs,org/docs/api-routes/introduction
import Order from "../../models/Order"
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
  // Check if the cart is tampered with -- 
  let product, sumTotal = 0;
  let cart = req.body.cart;
  for(let item in cart){
    sumTotal += cart[item].price * cart[item].qty
    product = await Product.findOne({slug: item})
    if(product.price != cart[item].price){
      res.status(200).json({succses: false, changed: true, "error": "The price of some items in your cart have changed. Please try again"})
      return
    }
    if(sumTotal !== req.body.subTotal){
      res.status(200).json({succses: false, changed: true, "error": "The price of some items in your cart have changed. Please try again"})
      return
    }
  }

    let order = new Order({
        email: req.body.email,
        orderId: req.body.oid,
        address: req.body.address,
        amount: req.body.subTotal,
        products: req.body.cart
    })
    await order.save()
    res.status(200).json({ succses: "succses" , order: order._id })
  }
  
export default connectDb(handler);