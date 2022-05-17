const Truck = require('../../../models/Auto/truck');

const deleteTruck = async (req, res, next) => {
    const truckID = req.params.truckID;

    let truck;
    try {
        truck = await Truck.findById(truckID);
    } catch (err) {
        return res.status(500).json("Deleting truck failed! ")
    }

    try {
        await truck.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting truck has failed! ", error: err })
    }
    return res.status(200).json({ message: "Truck deleted.", truck: truck })
}

module.exports = deleteTruck