const Km = require('../../../models/Drivers/km');

const showAllKms = async (req, res, next) => {
    let kms
    try {

        kms = await Km.find().exec();

        if (!kms)
            return res.json({
                message: " No kms found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show kms.", err: err })
    }
    res.json({
        message: "kms: ",
       kms: kms
    })

}

module.exports = showAllKms