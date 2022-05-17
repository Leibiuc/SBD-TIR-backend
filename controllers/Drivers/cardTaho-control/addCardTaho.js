const TahoCard = require('../../../models/Drivers/tahoCard');

const createTahoCard = async (req, res, next) => {

    const {

        driverName,
        image,
        dateEmitted,
        dateExpired

    } = req.body

    let createdTahoCard;

    try {

        createdTahoCard = new TahoCard({

            driverName,
            image,
            fileType: image.includes('image') ? 'image' : 'pdf',
            dateEmitted,
            dateExpired
            
        })

        await createdTahoCard.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding taho card has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Taho card added!',
        tahoCard: createdTahoCard
    });
};

module.exports = createTahoCard;