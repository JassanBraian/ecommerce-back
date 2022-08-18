const { Schema, model } = require('mongoose');

const saleSchema = new Schema({
    products: [{
        name: {
            type: String,
            required: [true, 'Please input a product']
        },
        brand: {
            type: String,
            required: [true, 'Please input a brand']
        },
        price: {
            type: Number,
            required: [true, 'Please input a price']
        },
        category: {
            type: String,
            required: [true, 'Please input a category']
        },
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: [true, 'Please input total price']
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please input a customer']
    }

}, { timestamps: true });

const Sale = model('Sale', saleSchema);

module.exports = Sale;