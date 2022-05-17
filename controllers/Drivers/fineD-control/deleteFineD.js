const FineD = require('../../../models/Drivers/fineD');
const deleteFineD = async (req, res, next) => {
    const fineID = req.params.fineID;

    let fine;
    try {
        fine = await FineD.findById(fineID);
    } catch (err) {
        return res.status(500).json("Deleting fine failed! ")
    }

    try {
        await fine.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting fine has failed! ", error: err })
    }
    return res.status(200).json({ message: "Fine deleted.", expense: fine })
}

module.exports = deleteFineD