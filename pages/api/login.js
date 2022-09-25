// Next,js API route support: https://nextjs,org/docs/api-routes/introduction
import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
import ReactDOMServer from "react-dom/server";
import NotFound from "../error";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({"email": req.body.email})
        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
        var decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        if (user){
            if(req.body.email == user.email && req.body.password == decryptedData){
                var token = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_SECRET, {expiresIn: "2d"});
                res.status(200).json({ succses: true, token, email: user.email })
            }
            else{
                res.status(200).json({ succses: false, error: "Invalid Credentials" })
            }
        }
        else{
            res.status(200).json({ succses: false, error: "No user Found" })
        }
        
    }
    else {
        return res
            .status(404)
            .send(ReactDOMServer.renderToStaticMarkup(<NotFound />));
    }
}
export default connectDb(handler);