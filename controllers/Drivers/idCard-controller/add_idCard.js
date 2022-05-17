const idCard = require('../../../models/Drivers/IdCard');

const createIdCard = async (req, res, next) => {

    const {
        driverName,
        image,
        dateEmitted,
        dateExpired

    } = req.body

    let createdIdCard;

    try {

        createdIdCard = new idCard({
            
            driverName,
            image,
            fileType: image.includes('image') ? 'image' : 'pdf',
            dateEmitted,
            dateExpired
        })

        await createdIdCard.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding idCard has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Driver added!',
        driver: createdIdCard
    });
};

module.exports = createIdCard;