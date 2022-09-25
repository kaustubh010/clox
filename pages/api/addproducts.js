// Next,js API route support: https://nextjs,org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
import ReactDOMServer from "react-dom/server";
import NotFound from "../error";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let P = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty,
            })
            await P.save()
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