// Next,js API route support: https://nextjs,org/docs/api-routes/introduction
import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    let order = new Order({
        email: req.body.email,
        orderId: req.body.oid,
        address: req.body.address,
        amount: req.body.subTotal,
        products: req.body.cart
    })
    await order.save()
    res.status(200).json({ succses: "succses" })
  }
  
export default connectDb(handler);