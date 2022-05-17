const CMR = require('../../../models/Auto/CMR');

const createCMR = async (req, res, next) => {

    
   let rates = req.body.rates;
    const {
        name,
        number,
        ratesNr,
        dateEmitted
    } = req.body

    let createdCMR;

    try {
        createdCMR = new CMR({
            name,
            number,
            rates,
            ratesNr,
            dateEmitted
        })
        
        await createdCMR.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding CMR has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'CMR added!',
        CMR: createdCMR
    });
};

exports.createCMR = createCMR;