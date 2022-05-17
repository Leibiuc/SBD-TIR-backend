const Drive = require('../../../models/Evidences/drives');
//////// NOT READY
const createDrive = async (req, res, next) => {

    const {

        
        loadCity,
        unloadCity,
        unload,
        load,
        KmStart,
        KmFinal

    } = req.body

    let createdDrive;

    try {

        createdDrive = new Drive({
            
            loadCity,
            unloadCity,
            unload,
            load,
            KmStart,
            KmFinal

        })

        await createdDrive.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding drive has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Drive added!',
        drive: createdDrive
    });
};

module.exports = createDrive;