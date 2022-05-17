const Tahograf = require('../../../models/Auto/tahograf');

const showAllTahografs = async (req, res, next) => {
    let Tahografs
    try{
    
     Tahografs = await Tahograf.find().exec();
    
    if (!Tahografs)
        return res.json({
            message: " No tahografs found!"
        });
    }catch(err){
        return res.json({message:"Could not show tahografs.", err:err})
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
      Tahografs.sort(compare); 
    res.json({
        message: "tahos: ",
        Tahografs: Tahografs
    })

}

module.exports = showAllTahografs