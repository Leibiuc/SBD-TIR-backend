const Gas = require('../../../models/Drivers/gas');

const showAllGas = async (req, res, next) => {
    let gas
    try {

        gas = await Gas.find().exec();

        if (!gas)
            return res.json({
                message: " No gas found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show gas.", err: err })
    }
    res.json({
        message: "gas: ",
       gas: gas
    })

}

module.exports = showAllGas