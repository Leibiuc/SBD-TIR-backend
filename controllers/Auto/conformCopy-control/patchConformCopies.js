const ConformCopy = require('../../../models/Auto/confromCopies');

const updateConformCopy = async (req, res, next) => {
    const conformID = req.params.conformID;
    let conformCopy, details = req.body.details;
    try {
        conformCopy = await ConformCopy.findById(conformID);
    } catch (err) {
        return res.status(500).json({ message: "Could not find the conform. ", err: err })
    }
    conformCopy.details = details;
    try {
        await conformCopy.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the conform. ", err: err })
    }
    return res.status(200).json({ message: "Conform copy updated.", conformCopy: conformCopy })
}

module.exports = updateConformCopy