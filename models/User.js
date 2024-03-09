import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    last_name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    properties: [{
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }]
    /*password: {

    }*/
});

const User = mongoose.model("User", userSchema); // Creating a model with the schema

export default User;
