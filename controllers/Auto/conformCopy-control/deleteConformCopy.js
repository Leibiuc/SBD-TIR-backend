const ConformCopy = require('../../../models/Auto/confromCopies');

const deleteConformCopy = async (req, res, next) => {
    const conformID = req.params.conformID;

    let conformCopy;
    try {
        conformCopy = await ConformCopy.findById(conformID);
    } catch (err) {
        return res.status(500).json("Deleting conform failed! ")
    }

    try {
        await conformCopy.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting conform has failed! ", error: err })
    }
    return res.status(200).json({ message: "Conform copy deleted.", conformCopy: conformCopy })
}

module.exports = deleteConformCopy