import User from "../models/User.js";

const UserController = {};

UserController.store = async (req, res, next) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.json({msg: 'New user added'});
    } catch (error) {
        res.json({error: 'error:', error});
        next();
    }
};

UserController.index = async () => {
    try {
        const users = await User.find({});
        res.json({users});
    } catch (error) {
        res.json({error: error});
        next();
    }
}

export default UserController;