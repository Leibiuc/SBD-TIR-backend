const ITP = require('../../../models/Auto/ITP');

const createITP = async (req, res, next) => {

    const {
        carNumber,
        details,
        
        dateEmitted,
        dateExpire
    } = req.body

    let createdITP;

    try {
        createdITP = new ITP({
            carNumber,
            details,
            dateEmitted,
            dateExpire
        })

        await createdITP.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding ITP has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'ITP added!',
        ITP: createdITP
    });
};
module.exports = createITP;