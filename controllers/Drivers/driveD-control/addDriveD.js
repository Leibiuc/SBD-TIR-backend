const DriveD = require('../../../models/Drivers/driveD');
const User = require('../../../models/user')
const createDriveD = async (req, res, next) => {
    const driverID = req.params.driverID;
    let user;
    try {
        user = await User.findById(driverID);
    } catch (err) {
        return res.status(500).json("Getting driver name  failed! ")
    }
    const {

        changePalets,
        startPlace,
        unloadPlace,
        date,


    } = req.body

    let createdDrive;

    try {

        createdDrive = new DriveD({
            driverName: user.carNumber + " " + user.name,
            changePalets,
            startPlace, 
            unloadPlace,
            date,

        })

        await createdDrive.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding drive has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'drive added!',
       drive: createdDrive
    });
};

module.exports = createDriveD;