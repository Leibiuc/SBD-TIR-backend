const Bill = require('../../../models/Evidences/bill');
const deleteBill = async (req, res, next) => {
    const billID = req.params.billID;

    let bill;
    try {
        bill = await Bill.findById(billID);
    } catch (err) {
        return res.status(500).json("Deleting bill failed! ")
    }

    try {
        await bill.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting bill has failed! ", error: err })
    }
    return res.status(200).json({ message: "Bill deleted.", bill: bill })
}

module.exports = deleteBill