const Drive = require('../../../models/Evidences/drives');
const deleteDrive = async (req, res, next) => {
    const driveID = req.params.driveID;

    let drive;
    try {
        drive = await Drive.findById(driveID);
    } catch (err) {
        return res.status(500).json("Deleting drive failed! ")
    }

    try {
        await drive.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting drive has failed! ", error: err })
    }
    return res.status(200).json({ message: "Drive deleted.", drive: drive })
}

module.exports = deleteDrive