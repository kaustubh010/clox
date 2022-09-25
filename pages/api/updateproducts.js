// Next,js API route support: https://nextjs,org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
import ReactDOMServer from "react-dom/server";
import NotFound from "../error";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let P = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({ succses: "succses" })
    }
    else {
        return res
            .status(404)
            .send(ReactDOMServer.renderToStaticMarkup(<NotFound />));
    }
}
export default connectDb(handler);