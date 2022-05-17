const Fine = require('../../../models/Evidences/fine');

const createFine = async (req, res, next) => {

    const {

        driverName,
        carNumber,
        fineImage,
        observations,
        sum,
        dateEmitted,
        dateExpire
    } = req.body

    let createdFine;

    try {

        createdFine = new Fine({
            driverName,
            carNumber,
            fineImage,
            observations,
            sum,
            dateEmitted,
            dateExpire

        })

        await createdFine.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding fine has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Fine added!',
        fine: createdFine
    });
};

module.exports = createFine;