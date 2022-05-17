const ITP = require('../../../models/Auto/ITP');

const showAllITPs = async (req, res, next) => {
    let ITPs
    try{
    
     ITPs = await ITP.find().exec();
    
    if (!ITPs)
        return res.json({
            message: " No ITPs found!"
        });
    }catch(err){
        return res.json({message:"Could not show ITPs.", err:err})
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
      ITPs.sort(compare); 
    res.json({
        message: "ITPs: ",
        ITPs: ITPs
    })

}

module.exports = showAllITPs