// Next,js API route support: https://nextjs,org/docs/api-routes/introduction
import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
import jsonwebtoken from 'jsonwebtoken'
import ReactDOMServer from "react-dom/server";
import NotFound from "../error";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let token = req.body.token
        let user = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        let dbuser = await User.findOneAndUpdate({email : user.email}, {address: req.body.address, pincode: req.body.pincode, phone: req.body.phone, name: req.body.name})
        const {name, email, address, pincode, phone} = dbuser
        res.status(200).json({success: true, name, email, address, pincode, phone })
    }
    else {
        return res
            .status(404)
            .send(ReactDOMServer.renderToStaticMarkup(<NotFound />));
    }
}
export default connectDb(handler);