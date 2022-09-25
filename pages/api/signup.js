// Next,js API route support: https://nextjs,org/docs/api-routes/introduction
import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");
import ReactDOMServer from "react-dom/server";
import NotFound from "../error";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({"email": req.body.email})
        if (!user){
            const {name , email} = req.body
            let U = User({name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString()})
            await U.save()
            res.status(200).json({ succses: "succses" })
        }
        else if(user){
            res.status(200).json({ succses: false, error: "This email is already regestered" })
        }
    }
    else {
        return res
            .status(404)
            .send(ReactDOMServer.renderToStaticMarkup(<NotFound />));
    }
}
export default connectDb(handler);