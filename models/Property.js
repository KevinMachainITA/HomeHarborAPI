import mongoose from "mongoose";

const Schema = mongoose.Schema;

const propertySchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    is_available: {
        type: Boolean,
        default: true
    },
    images: [{
        type: String,
        trim: true
    }],
    adress: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    //category
    rooms: {
        type: Number,
    },
    bathrooms: {
        type: Number,
    },
    sqft: {
        type: Number,
    },
    price: {
        type: Number,
    },
    year_built: {
        type: Number,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;