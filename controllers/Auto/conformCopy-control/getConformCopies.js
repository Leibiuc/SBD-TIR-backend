const ConformCopy = require('../../../models/Auto/confromCopies');

const showAllConformCopies = async (req, res, next) => {
    let copies
    try{
    
     copies = await ConformCopy.find().exec();
    
    if (!copies)
        return res.json({
            message: " No conforms found!"
        });
    }catch(err){
        return res.json({message:"Could not show conforms.", err:err})
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
      copies.sort(compare); 
    res.json({
        message: "Conforms: ",
        conformCopies: copies
    })

}
module.exports = showAllConformCopies