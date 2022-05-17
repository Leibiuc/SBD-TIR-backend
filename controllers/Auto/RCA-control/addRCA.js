const RCA = require('../../../models/Auto/RCA');

const createRCA = async (req, res, next) => {

    const {
        carNumber,
        details,
        dateEmitted,
        dateExpire
    } = req.body

    let createdRCA;

    try {
        createdRCA = new RCA({
            carNumber,
            details,
            dateEmitted,
            dateExpire
        })

        await createdRCA.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding RCA has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'RCA added!',
        RCA: createdRCA
    });
};
module.exports = createRCA;