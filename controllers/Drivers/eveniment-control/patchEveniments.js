const Eveniment = require('../../../models/Drivers/eveniment');
//const Product = require('../../models/product');

const updateEveniment = async (req, res, next) => {
    const evenimentID = req.params.evenimentID;
    const {  description,
        image } = req.body
    let eveniment;
    try {
        eveniment = await Eveniment.findById(evenimentID);
        if (!eveniment)
            return res.status(500).json({ message: "Could not find the eveniment. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the eveniment. ", err: err })
    }

    eveniment.description = description
    eveniment.fileType = image.includes('image') ? 'image' : 'pdf'
    eveniment.image = image

    try {
        await eveniment.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the eveniment. ", err: err })
    }
    return res.status(200).json({ message: "eveniment updated.", eveniment: eveniment })
}

module.exports = updateEveniment