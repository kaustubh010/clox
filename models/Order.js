const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    products: [{
        productId: {type: String},
        quantity: {type: Number, default: 1}
    }],
    address: {type: String, required: true},
    amount: {type: Nummber, required: true},
    status: {type: String, required: true, default: 'Pending'},
  }, {timestamps: true});

  mongoose.models = {}
  export default mongoose.model('Order', OrderSchema);