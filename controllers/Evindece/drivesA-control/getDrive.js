const Drive = require('../../../models/Evidences/drives');

const showAllDrive = async (req, res, next) => {
    let drive
    try {

        drive = await Drive.find().exec();

        if (!drive)
            return res.json({
                message: " No drives  found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show drives.", err: err })
    }
    res.json({
        message: "Drive: ",
        drives: drive
    })

}

module.exports = showAllDrive