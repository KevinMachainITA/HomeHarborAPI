import User from "../models/User.js";

const UserController = {};

UserController.store = async (req, res, next) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.json({msg: 'New user added'});
    } catch (error) {
        console.log({error: 'error:', error});
        next();
    }
};

UserController.index = async (req, res, next) => {
    try {
        const users = await User.find({}).populate('properties');
        res.json({users});
    } catch (error) {
        console.log(error)
        next();
    }
}

UserController.show = async (req, res, next) => {
    const user = await User.findById(req.params.idUser);

    if(!user){
        res.json({msg: 'User not found'});
        next();
    }

    res.json(user);
}

UserController.update = async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.idUser}, req.body, {new:true});
        res.json(user);
    } catch (error) {
        console.log(error);
        next();
    }
}

UserController.delete = async (req, res, next) => {
    try {
        await User.findOneAndDelete({_id: req.params.idUser});
        res.json({msg: 'User deleted'});
    } catch (error) {
        console.log(error);
        next();
    }
}

export default UserController;