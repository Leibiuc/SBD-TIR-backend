const Certificate = require('../../../models/Drivers/certificate');

const createCertificate = async (req, res, next) => {

    const {

        driverName,
        image,
        dateEmitted,
        dateExpired

    } = req.body

    let createdCertificate;

    try {

        createdCertificate = new Certificate({

            driverName,
            image,
            fileType: image.includes('image') ? 'image' : 'pdf',
            dateEmitted,
            dateExpired
            
        })

        await createdCertificate.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding certificate has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Certificate added!',
        certificate: createdCertificate
    });
};

module.exports = createCertificate;