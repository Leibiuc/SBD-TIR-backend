const Casco = require('../../../models/Auto/casco');

const showAllCascos = async (req, res, next) => {
    let Cascos
    try{
    
     Cascos = await Casco.find().exec();
    
    if (!Cascos)
        return res.json({
            message: " No cascos found!"
        });
    }catch(err){
        return res.json({message:"Could not show cascos.", err:err})
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
      Cascos.sort(compare); 
    res.json({
        message: "Cascos: ",
        cascos: Cascos
    })

}

module.exports = showAllCascos