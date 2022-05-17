const Raport = require('../../../models/Evidences/raports');
//////// NOT READY
const createRaport = async (req, res, next) => {

    const {

        carNr,
        money,
        KmDone,
        expenses


    } = req.body

    let createdRaport;

    try {

        createdRaport = new Raport({

            carNr,
            money,
            KmDone,
            expenses

        })

        await createdRaport.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding raport has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Raport added!',
        raport: createdRaport
    });
};

module.exports = createRaport;