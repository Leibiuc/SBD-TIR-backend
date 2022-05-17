const Casco = require('../../../models/Auto/casco');

const createCasco = async (req, res, next) => {

   let rates = req.body.rates;
    const {
        carNumber,
        details,
        dateEmitted,
        dateExpire
    } = req.body

    let createdCasco;

    try {
        createdCasco = new Casco({
            carNumber,
            details,
            rates,
            dateEmitted,
            dateExpire
        })

        await createdCasco.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding casco has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Casco added!',
        Casco: createdCasco
    });
};
module.exports = createCasco