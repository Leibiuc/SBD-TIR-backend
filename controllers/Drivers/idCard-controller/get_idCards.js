const IdCards = require('../../../models/Drivers/IdCard');

const showAllIdCards = async (req, res, next) => {
    let idCards
    try{
    
     idCards = await IdCards.find().exec();
    
    if (!idCards)
        return res.json({
            message: " No drivers found!"
        });
    }catch(err){
        return res.json({message:"Could not show drivers.", err:err})
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
      idCards.sort(compare);    

    res.json({
        message: "Drivers: ",
        drivers: idCards
    })

}

module.exports = showAllIdCards