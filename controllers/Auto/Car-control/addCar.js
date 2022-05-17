const Car = require('../../../models/Auto/car');

const createCar = async (req, res, next) => {

    const {
        brand,
        model_,
        KM,
        carNumber,
        oilChange,
        consume,
        oilType,
        lastRevisionPlace
    } = req.body    

    let createdCar;

    try {
        createdCar = new Car({
            brand,
            model_,
            KM,
            carNumber,
            oilChange,
            consume,
            oilType,
            lastRevisionPlace,
            date_added: Date.now()
        })
        
        await createdCar.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding car has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Car added!',
        Car: createdCar
    });
};

module.exports = createCar;