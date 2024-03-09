import Property from "../models/Property.js";

const PropertyController = {};

PropertyController.store = async (req, res, next) => {
    const property = new Property(req.body);

    try {
        await property.save();
        res.json({msg: 'Property saved'});
    } catch (error) {
        console.log(error);
        next();
    }
};


export default PropertyController;