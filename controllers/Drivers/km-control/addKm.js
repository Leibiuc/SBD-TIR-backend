const Km = require('../../../models/Drivers/km');
const User = require('../../../models/user')
const createKm = async (req, res, next) => {
    const driverID = req.params.driverID;
    let user;
    try {
        user = await User.findById(driverID);
    } catch (err) {
        return res.status(500).json("Getting driver name  failed! ")
    }
    const {

        kmStartMonth,
        kmEndMonth

    } = req.body

    let createdKm;

    try {

        createdKm = new Km({
            driverName: user.carNumber + " " + user.name,

            kmStartMonth,
            kmEndMonth

        })

        await createdKm.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding km has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'km added!',
        km: createdKm
    });
};

module.exports = createKm;