const DriveD = require('../../../models/Drivers/driveD');
const deleteDriveD = async (req, res, next) => {
    const driveID = req.params.driveID;

    let drive;
    try {
        drive = await DriveD.findById(driveID);
    } catch (err) {
        return res.status(500).json("Deleting drive failed! ")
    }

    try {
        await drive.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting drive has failed! ", error: err })
    }
    return res.status(200).json({ message: "drive deleted.", drive: drive })
}

module.exports = deleteDriveD