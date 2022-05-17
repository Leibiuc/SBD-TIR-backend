const Truck = require('../../../models/Auto/truck');

const createTruck = async (req, res, next) => {

    const {
        brand,
        model_,
        KM,
        carNumber,
        oilChange,
        oilChangeGroup,
        oilChangeBox,
        oilChangeRetarder,
        consume,
        oilType,
        lastRevisionPlace
    } = req.body

    let createdTruck;

    try {
        createdTruck = new Truck({
            brand,
            model_,
            KM,
            carNumber,
            oilChange,
            oilChangeGroup,
            oilChangeBox,
            oilChangeRetarder,
            consume,
            oilType,
            lastRevisionPlace,
            date_added: Date.now()
        })

        await createdTruck.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding truck has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Truck added!',
        Truck: createdTruck
    });
};

module.exports = createTruck;