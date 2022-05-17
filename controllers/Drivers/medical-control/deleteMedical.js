const Medical = require('../../../models/Drivers/Medical');
const deleteMedical = async (req, res, next) => {
    const medicalID = req.params.medicalID;

    let medical;
    try {
        medical = await Medical.findById(medicalID);
    } catch (err) {
        return res.status(500).json("Deleting medical failed! ")
    }

    try {
        await medical.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting medical has failed! ", error: err })
    }
    return res.status(200).json({ message: "Medical deleted.", medical: medical })
}

module.exports = deleteMedical