const Car = require('../../../models/Auto/car');
//const Product = require('../../models/product');

const updateCar = async (req, res, next) => {
    const carID = req.params.carID;
    const { KM,
        oilChange,
        consume,
        oilType,
        lastRevisionPlace } = req.body
    let car;
    try {
        car = await Car.findById(carID);

    } catch (err) {
        return res.status(500).json({ message: "Could not update the car. ", err: err })
    }

    car.KM= KM;
    car.oilChange= oilChange;
    car.consume= consume;
    car.oilType= oilType;
    car.lastRevisionPlace= lastRevisionPlace;
    car.last_updated = Date.now();

    try {
        await car.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the car. ", err: err })
    }
    return res.status(200).json({ message: "Car updated.", category: car })
}

module.exports = updateCar