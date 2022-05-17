const DriveD = require('../../../models/Drivers/driveD');

const showAllDrivesD = async (req, res, next) => {
    let drive
    try {

        drive = await DriveD.find().exec();

        if (!drive)
            return res.json({
                message: " No drive found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show drive.", err: err })
    }
    res.json({
        message: "drive: ",
       drive: drive
    })

}

module.exports = showAllDrivesD