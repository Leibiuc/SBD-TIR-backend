const FineD = require('../../../models/Drivers/fineD');
const User = require('../../../models/user')
const createFineD = async (req, res, next) => {
    const driverID = req.params.driverID;
    let user;
    try {
        user = await User.findById(driverID);
    } catch (err) {
        return res.status(500).json("Getting driver name  failed! ")
    }
    const {

        sum,
        description,
        image

    } = req.body

    let createdFineD;

    try {

        createdFineD = new FineD({
            driverName: user.carNumber + " " + user.name,
            description,
            sum,
            fileType: image.includes('image') ? 'image' : 'pdf',
            image

        })

        await createdFineD.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding fineD has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Fine added!',
        fine: createdFineD
    });
};

module.exports = createFineD;