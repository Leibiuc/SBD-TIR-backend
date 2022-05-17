const Bill = require('../../../models/Evidences/bill');

const showAllBills = async (req, res, next) => {
    let bills
    try {

        bills = await Bill.find().exec();

        if (!bills)
            return res.json({
                message: " No bill found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show bills.", err: err })
    }
    function compare( a, b ) {
        if ( a.dateExpire < b.dateExpire ){
          return -1;
        }
        if ( a.dateExpire > b.dateExpire ){
          return 1;
        }
        return 0;
      }
      bills.sort(compare); 
    res.json({
        message: "Bills: ",
        bills: bills
    })

}

module.exports = showAllBills