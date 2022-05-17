const RCA = require('../../../models/Auto/RCA');

const showAllRCAs = async (req, res, next) => {
    let RCAs
    try{
    
     RCAs = await RCA.find().exec();
    
    if (!RCAs)
        return res.json({
            message: " No RCAs found!"
        });
    }catch(err){
        return res.json({message:"Could not show RCAs.", err:err})
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
      RCAs.sort(compare); 
    res.json({
        message: "RCAs: ",
        RCAs: RCAs
    })

}

module.exports = showAllRCAs