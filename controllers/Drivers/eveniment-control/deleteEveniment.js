const Eveniment = require('../../../models/Drivers/eveniment');
const deleteEveniment = async (req, res, next) => {
    const evenimentID = req.params.evenimentID;

    let eveniment;
    try {
        eveniment = await Eveniment.findById(evenimentID);
    } catch (err) {
        return res.status(500).json("Deleting eveniment failed! ")
    }

    try {
        await eveniment.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting eveniment has failed! ", error: err })
    }
    return res.status(200).json({ message: "eveniment deleted.", eveniment: eveniment })
}

module.exports = deleteEveniment