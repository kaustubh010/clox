import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose"
import jsonwebtoken from "jsonwebtoken"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const token = req.body.token
        const data = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        let orders = await Order.find({ email: data.email })
        res.status(200).json({ orders })
    }
    else {
        res.status(400).json({ error: 'This method is not allowed' })
    }
}

export default connectDb(handler);