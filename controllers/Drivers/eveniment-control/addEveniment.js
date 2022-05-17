const Eveniment = require('../../../models/Drivers/eveniment');
const User = require('../../../models/user')
const createEveniment = async (req, res, next) => {
    const driverID = req.params.driverID;
    let user;
    try {
        user = await User.findById(driverID);
    } catch (err) {
        return res.status(500).json("Getting driver name  failed! ")
    }
    const {

        description,
        image


    } = req.body

    let createdEveniment;

    try {

        createdEveniment = new Eveniment({
            driverName: user.carNumber + " " + user.name,
            description,
            fileType: image.includes('image') ? 'image' : 'pdf',
            image

        })

        await createdEveniment.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding eveniment has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'event added!',
        eveniment: createdEveniment
    });
};

module.exports = createEveniment;