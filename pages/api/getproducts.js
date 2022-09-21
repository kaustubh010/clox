// Next,js API route support: https://nextjs,org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
import Error from 'next/error'

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let products = await Product.find()
        res.status(200).json({ products })
    }
    else{
        res.status(400).json({error: 'This method is not allowed'})
    }
}
export default connectDb(handler);