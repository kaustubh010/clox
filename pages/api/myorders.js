import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose"
import jsonwebtoken from "jsonwebtoken"
import ReactDOMServer from "react-dom/server";
import NotFound from "../error";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const token = req.body.token
        const data = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        let orders = await Order.find({ email: data.email })
        res.status(200).json({ orders })
    }
    else {
        return res
            .status(404)
            .send(ReactDOMServer.renderToStaticMarkup(<NotFound />));
    }
}

export default connectDb(handler);