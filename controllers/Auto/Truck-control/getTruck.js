const Truck = require('../../../models/Auto/truck');

const showAllTrucks = async (req, res, next) => {
    let trucks
    try {

        trucks = await Truck.find().exec();

        if (!trucks)
            return res.json({
                message: " No trucks found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show trucks.", err: err })
    }
    res.json({
        message: "trucks: ",
        trucks: trucks
    })
}
module.exports = showAllTrucks