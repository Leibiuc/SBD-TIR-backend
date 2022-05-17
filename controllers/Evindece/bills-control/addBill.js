const Bill = require('../../../models/Evidences/bill');

const createBill = async (req, res, next) => {

    const {

        billNr,
        sum,
        dateEmitted,
        dateExpire

    } = req.body

    let createdBill;

    try {

        createdBill = new Bill({

            billNr,
            sum,
            dateEmitted,
            dateExpire

        })

        await createdBill.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding bill has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Bill added!',
        bill: createdBill
    });
};

module.exports = createBill;