const License = require('../../../models/Drivers/license');
const deleteLicense = async (req, res, next) => {
    const licenseID = req.params.licenseID;

    let license;
    try {
        license = await License.findById(licenseID);
    } catch (err) {
        return res.status(500).json("Deleting license failed! ")
    }

    try {
        await license.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting license has failed! ", error: err })
    }
    return res.status(200).json({ message: "License deleted.", license: license })
}

module.exports = deleteLicense