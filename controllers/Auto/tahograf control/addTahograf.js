const Tagograf = require('../../../models/Auto/tahograf');

const createTahograf = async (req, res, next) => {

    const {
        carNumber,
        details,
        dateEmitted,
        dateExpire
    } = req.body

    let createdTahograf;

    try {
        createdTahograf = new Tagograf({
            carNumber,
            details,
            dateEmitted,
            dateExpire
        })
        await createdTahograf.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding tahograf has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Tahograf added!',
        tahograf: createdTahograf
    });
};
module.exports = createTahograf;