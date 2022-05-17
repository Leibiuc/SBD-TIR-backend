const Drive = require('../../../models/Evidences/drives');
//const Product = require('../../models/product');

const updateDrive = async (req, res, next) => {
    const drivesID = req.params.driveID;
    let drive;
    const {
        loadCity,
        unloadCity,
        unload,
        load,
        KmStart,
        KmFinal}= req.body;
    try {
        drive = await Drive.findById(drivesID);
        if (!drive)
            return res.status(500).json({ message: "Could not find the statistic. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the statistic. ", err: err })
    }

    
    drive.loadCity = loadCity;
    drive.unloadCity = unloadCity;
    drive.unload = unload;
    drive.load = load;
    drive.KmStart = KmStart;
    drive.KmStart = KmFinal;

    try {
        await drive.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the drive. ", err: err })
    }
    return res.status(200).json({ message: "Drive updated.", drive: drive })
}

module.exports = updateDrive