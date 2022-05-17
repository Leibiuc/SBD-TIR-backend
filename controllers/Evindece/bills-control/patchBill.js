const Bill = require('../../../models/Evidences/bill');
//const Product = require('../../models/product');

const editBill = async (req, res, next) => {
    const billID = req.params.billID;
    let bill;
    const { billNr,
        sum,
        dateEmitted,
        dateExpire } = req.body;
    try {
        bill = await Bill.findById(billID);
        if (!bill)
            return res.status(500).json({ message: "Could not find the bill. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the bill. ", err: err })
    }

    bill.billNr = billNr;
    bill.sum =sum;
    bill.dateExpire= dateExpire;
    bill.dateEmitted= dateEmitted;


    try {
        await bill.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the bill. ", err: err })
    }
    return res.status(200).json({ message: "Bill updated.", bill: bill })
}

module.exports = editBill