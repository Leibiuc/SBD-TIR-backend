const Tahograf = require('../../../models/Auto/tahograf');

const deleteTahograf = async (req, res, next) => {
    const tahografID = req.params.tahografID;

    let tahograf;
    try {
        tahograf = await Tahograf.findById(tahografID);
    } catch (err) {
        return res.status(500).json("Deleting tahograf failed! ")
    }

    try {
        await tahograf.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting tahograf has failed! ", error: err })
    }
    return res.status(200).json({ message: "Tahograf deleted.", tahograf: tahograf })
}

module.exports = deleteTahograf