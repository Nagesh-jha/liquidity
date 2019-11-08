const User = require("../models/user.model");
const Userinfo = require("../models/userinfo.model");



exports.createLoginUser = async (req, res) => {
    try {
        const result = await User.create(req.body);
        return res.json({
            success: 0,
            message: "User created Successfully!",
            data: result
        });
    } catch (err) {
        return res.json({ sucess: -1, message: err });
    }
};

exports.createUser = async (req, res) => {
    try {
        const result = await Userinfo.create(req.body);
        return res.json({
            success: 0,
            message: "User created Successfully!",
            data: result
        });
    } catch (err) {
        return res.json({ sucess: -1, message: err });
    }
};

exports.getUserList = async (req, res) => {
    try {
        const data = await Userinfo.find(req.body, { __v: 0, created_at: 0, updated_at: 0 }, { sort: { updatedAt: -1 } })
        return res.json({
            sucess: 0,
            message: "Get all users Successfully!",
            data: data
        });
    } catch (err) {
        return res.json({ sucess: -1, message: err });
    }



};
exports.updateUserInfo = async (req, res) => {

    const data = await Userinfo.findByIdAndUpdate(
        req.body._id,
        {
           $set:req.body
        },
        { new: true })
    if (data) {
        return res.json({
            sucess: 0,
            message: "User updated successfully!",
            data: data
        });
    } else {
        return res.json({
            sucess: -1,
            message: "User not found!",
        });
    }
};

exports.deleteUser = (req, res) => {
    Userinfo.findByIdAndDelete(req.body._id)
        .then(data => {
            return res.json({
                sucess: 0,
                message: "User removed successfully!",
                data: data
            });
        })
        .catch(err => {
            return res.json({ sucess: -1, message: err });
        });
}; 