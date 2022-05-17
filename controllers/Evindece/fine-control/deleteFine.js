const Fine = require('../../../models/Evidences/fine');
const deleteFine = async (req, res, next) => {
    const fineID = req.params.fineID;

    let fine;
    try {
        fine = await Fine.findById(fineID);
    } catch (err) {
        return res.status(500).json("Deleting fine failed! ")
    }

    try {
        await fine.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting fine has failed! ", error: err })
    }
    return res.status(200).json({ message: "Fine deleted.", fine: fine })
}

module.exports = deleteFine