import Order from "../../models/Order"
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // update quantity into orders table after placing the order
        let order = await Order.findOne({ orderId: req.body.orderId })
        let products = order.products
        for (let slug in products) {
            await Product.findOneAndUpdate({ slug: slug }, { $inc: { "availableQty": - products[slug].qty } })
        }
        res.status(200).json({ succses: true })
    }
    else {
        res.status(400).json({ error: 'This method is not allowed' })
    }
}

export default connectDb(handler);