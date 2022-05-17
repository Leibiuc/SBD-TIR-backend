const DriveD = require('../../../models/Drivers/driveD');
//const Product = require('../../models/product');

const updateDriveD = async (req, res, next) => {
    const driveID = req.params.driveID;
    const { changePalets,
        startPlace,
        unloadPlace, } = req.body
    let drive;
    try {
        drive = await DriveD.findById(driveID);
        if (!drive)
            return res.status(500).json({ message: "Could not find the drive. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the drive. ", err: err })
    }

    drive.changePalets = changePalets
    drive.startPlace = startPlace
    drive.unloadPlace = unloadPlace

    try {
        await drive.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the drivs. ", err: err })
    }
    return res.status(200).json({ message: "drive updated.", drive: drive })
}

module.exports = updateDriveD