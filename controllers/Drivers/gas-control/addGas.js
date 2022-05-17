const Gas = require('../../../models/Drivers/gas');
const User = require('../../../models/user')
const createGas = async (req, res, next) => {
    const driverID = req.params.driverID;
    let user;
    try {
        user = await User.findById(driverID);
    } catch (err) {
        return res.status(500).json("Getting driver name  failed! ")
    }
    const {

        litres,
        price,
        place,


    } = req.body

    let createdGas;

    try {

        createdGas = new Gas({
            driverName: user.carNumber + " " + user.name,

            litres,
            price,
            place,

        })

        await createdGas.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding gas has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'gas added!',
        gas: createdGas
    });
};

module.exports = createGas;