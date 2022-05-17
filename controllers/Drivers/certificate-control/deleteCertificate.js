const Certificate = require('../../../models/Drivers/certificate');
const deleteCertificate = async (req, res, next) => {
    const certificateID = req.params.certificateID;

    let certificate;
    try {
        certificate = await Certificate.findById(certificateID);
    } catch (err) {
        return res.status(500).json("Deleting certificate failed! ")
    }

    try {
        await certificate.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting certificate has failed! ", error: err })
    }
    return res.status(200).json({ message: "Certificate deleted.", certificate: certificate })
}

module.exports = deleteCertificate