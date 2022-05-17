const Car = require('../../../models/Auto/car');

const deleteCar = async (req, res, next) => {
    const carID = req.params.carID;

    let car;
    try {
        car = await Car.findById(carID);
    } catch (err) {
        return res.status(500).json("Deleting car failed! ")
    }

    try {
        await car.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting Car has failed! ", error: err })
    }
    return res.status(200).json({ message: "Car deleted.", car: car })
}

module.exports = deleteCar