// Next,js API route support: https://nextjs,org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
import ReactDOMServer from "react-dom/server";
import NotFound from "../error";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        await Product.findByIdAndUpdate(req.body.id,{
            title: req.body.title,
            slug: req.body.slug,
            desc: req.body.desc,
            img: req.body.img,
            price: req.body.price,
            availableQty: req.body.availableQty,
        })
        res.status(200).json({ succses: "succses" })
    }
    else {
        return res
            .status(404)
            .send(ReactDOMServer.renderToStaticMarkup(<NotFound />));
    }
}
export default connectDb(handler);