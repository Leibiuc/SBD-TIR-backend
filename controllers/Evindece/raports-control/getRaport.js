const Raport = require('../../../models/Evidences/raports');

const showAllRaports = async (req, res, next) => {
    let raport
    try {

        raport = await Raport.find().exec();

        if (!raport)
            return res.json({
                message: " No raports  found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show raports.", err: err })
    }
    res.json({
        message: "Raports: ",
        raports: raport
    })

}

module.exports = showAllRaports