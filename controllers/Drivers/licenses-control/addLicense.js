const License = require('../../../models/Drivers/license');

const createLicense = async (req, res, next) => {

    const {

        driverName,
        image,
        dateEmitted,
        dateExpired

    } = req.body

    let createdLicense;

    try {

        createdLicense = new License({

            driverName,
            image,
            fileType: image.includes('image') ? 'image' : 'pdf',
            dateEmitted,
            dateExpired
            
        })

        await createdLicense.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding license has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'License added!',
        License: createdLicense
    });
};

module.exports = createLicense;