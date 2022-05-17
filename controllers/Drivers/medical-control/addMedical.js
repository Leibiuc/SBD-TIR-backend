const Medical = require('../../../models/Drivers/Medical');

const createMedical = async (req, res, next) => {

    const {

        driverName,
        image,
        dateEmitted,
        dateExpired

    } = req.body

    let createdMedical;

    try {

        createdMedical = new Medical({

            driverName,
            image,
            fileType: image.includes('image') ? 'image' : 'pdf',
            dateEmitted,
            dateExpired
            
        })

        await createdMedical.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding medical has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Medical added!',
        medical: createdMedical
    });
};

module.exports = createMedical;