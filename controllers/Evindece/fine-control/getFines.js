const Fine = require('../../../models/Evidences/fine');

const showAllFines = async (req, res, next) => {
    let fine
    try {

        fine = await Fine.find().exec();

        if (!fine)
            return res.json({
                message: " No fine found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show fines.", err: err })
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
      fine.sort(compare); 
    res.json({
        message: "Fines: ",
        fines: fine
    })

}

module.exports = showAllFines