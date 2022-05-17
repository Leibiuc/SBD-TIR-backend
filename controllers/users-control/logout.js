const User = require('../../models/user');
const logoutUser = async (req, res, next) => {
    const userID = req.params.uid;
    let user;
    try {
        user = await User.findById(userID);
    } catch (err) {
        return res.status(500).json("Error! Could not leave. ")
    }
    user.loggedIn = false;
    try {
        await user.save();
    } catch (err) {
        return res.status(500).json("Could not log out! ")
    }
    return res.status(200).json({ message: "BYE!", user: user.toObject({ getters: true }) })
}

module.exports = logoutUser