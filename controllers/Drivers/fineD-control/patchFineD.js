const FineD = require('../../../models/Drivers/fineD');
//const Product = require('../../models/product');

const updateFineD = async (req, res, next) => {
    const fineID = req.params.fineID;
    const { sum , description, image  } = req.body
    let fine;
    try {
        fine = await FineD.findById(fineID);
        if (!fine)
            return res.status(500).json({ message: "Could not find the fine. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the fine. ", err: err })
    }

    fine.sum = sum
    fine.description = description
    fine.fileType = image.includes('image') ? 'image' : 'pdf'
    fine.image = image
    

    try {
        await fine.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the fine. ", err: err })
    }
    return res.status(200).json({ message: "Fine updated.", fine: fine })
}

module.exports = updateFineD