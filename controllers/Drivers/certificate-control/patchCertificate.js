const Certificates = require('../../../models/Drivers/certificate');
//const Product = require('../../models/product');

const updateCertificate = async (req, res, next) => {
    const certificateID = req.params.certificateID;
    const { driverName ,image } = req.body
    let certificate;
    try {
        certificate = await Certificates.findById(certificateID);
        if (!certificate)
            return res.status(500).json({ message: "Could not find the certificate. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the certificate. ", err: err })
    }

    certificate.image = image
    certificate.fileType = image.includes('image') ? 'image' : 'pdf'
    certificate.driverName = driverName

    try {
        await certificate.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the license. ", err: err })
    }
    return res.status(200).json({ message: "Certificate updated.", certificate: certificate })
}

module.exports = updateCertificate