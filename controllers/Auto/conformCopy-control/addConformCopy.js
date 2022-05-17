const ConformCopy = require('../../../models/Auto/confromCopies');

const createConformCopy = async (req, res, next) => {

    const {
        carNumber,
        details,
        dateEmitted,
        dateExpire
    } = req.body

    let createdConformCopy;

    try {
        createdConformCopy = new ConformCopy({
            carNumber,
            details,
            dateEmitted,
            dateExpire
        })
        await createdConformCopy.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding conform has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Conform added!',
        conformCopy: createdConformCopy
    });
};
module.exports = createConformCopy;