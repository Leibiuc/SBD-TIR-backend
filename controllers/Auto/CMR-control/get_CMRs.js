const CMR = require('../../../models/Auto/CMR');

const showAllCMRs = async (req, res, next) => {
    let cmrs
    try{
    
     cmrs = await CMR.find().exec();
    
    if (!cmrs)
        return res.json({
            message: " No CMRs found!"
        });
    }catch(err){
        return res.json({message:"Could not show CMRs.", err:err})
    }
    res.json({
        message: "CMRs: ",
        cmrs: cmrs
    })

}

module.exports = showAllCMRs