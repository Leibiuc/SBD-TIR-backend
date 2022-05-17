const Truck = require('../../../models/Auto/truck');
//const Product = require('../../models/product');

const updateTruck = async (req, res, next) => {
    const truckID = req.params.truckID;
    const { KM,
        oilChange,
        consume,
        oilType,
        lastRevisionPlace,
        oilChangeGroup,
        oilChangeBox,
        oilChangeRetarder,
    } = req.body
    let truck;
    try {
        truck = await Truck.findById(truckID);

    } catch (err) {
        return res.status(500).json({ message: "Could not update the truck. ", err: err })
    }

    truck.KM = KM;
    truck.oilChange = oilChange;
    truck.consume = consume;
    truck.oilType = oilType;
    truck.oilChangeGroup = oilChangeGroup;
    truck.oilChangeBox = oilChangeBox;
    truck.oilChangeRetarder = oilChangeRetarder;
    truck.lastRevisionPlace = lastRevisionPlace;
    truck.last_updated = Date.now();

    try {
        await truck.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the truck. ", err: err })
    }
    return res.status(200).json({ message: "Truck updated.", truck: truck })
}

module.exports = updateTruck