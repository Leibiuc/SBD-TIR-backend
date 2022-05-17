const Medical = require('../../../models/Drivers/Medical');
//const Product = require('../../models/product');

const updateMedical = async (req, res, next) => {
    const medicalID = req.params.medicalID;
    const { driverName ,image } = req.body
    let medical;
    try {
        medical = await Medical.findById(medicalID);
        if (!medical)
            return res.status(500).json({ message: "Could not find the certificate. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the certificate. ", err: err })
    }

    medical.image = image
    medical.driverName = driverName
    medical.fileType = image.includes('image') ? 'image' : 'pdf'


    try {
        await medical.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the license. ", err: err })
    }
    return res.status(200).json({ message: "Medical updated.", medical: medical })
}

module.exports = updateMedical