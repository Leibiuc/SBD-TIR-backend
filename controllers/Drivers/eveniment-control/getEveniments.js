const Eveniment = require('../../../models/Drivers/eveniment');

const showAllEveniments = async (req, res, next) => {
    let eveniment
    try {

        eveniment = await Eveniment.find().exec();

        if (!eveniment)
            return res.json({
                message: " No eveniment found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show eveniment.", err: err })
    }
    res.json({
        message: "eveniment: ",
        eveniment: eveniment
    })

}

module.exports = showAllEveniments