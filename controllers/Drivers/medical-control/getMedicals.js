const Medical = require('../../../models/Drivers/Medical');

const showAllMedicals = async (req, res, next) => {
    let medicals
    try {

        medicals = await Medical.find().exec();

        if (!medicals)
            return res.json({
                message: " No medicals found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show medicals.", err: err })
    }
    
    function compare( a, b ) {
        if ( a.dateExpired < b.dateExpired ){
          return -1;
        }
        if ( a.dateExpired > b.dateExpired ){
          return 1;
        }
        return 0;
      }
      medicals.sort(compare); 
    res.json({
        message: "Medical: ",
       medical: medicals
    })

}

module.exports = showAllMedicals