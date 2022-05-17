const License = require('../../../models/Drivers/license');
//const Product = require('../../models/product');

const updateLicense = async (req, res, next) => {
    const licenseID = req.params.licenseID;
    const { image , driverName } = req.body
    let license;
    try {
        license = await License.findById(licenseID);
        if (!license)
            return res.status(500).json({ message: "Could not find the license. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the license. ", err: err })
    }

    license.image = image
    license.fileType = image.includes('image') ? 'image' : 'pdf'
    license.driverName = driverName

    try {
        await license.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the license. ", err: err })
    }
    return res.status(200).json({ message: "License updated.", license: license })
}

module.exports = updateLicense