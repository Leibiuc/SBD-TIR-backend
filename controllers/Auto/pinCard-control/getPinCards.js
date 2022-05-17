const PinCard = require('../../../models/Auto/PinCard');

const showAllPinCards = async (req, res, next) => {
    let pinCards
    try{
    
     pinCards = await PinCard.find().exec();
    
    if (!pinCards)
        return res.json({
            message: " No cards found!"
        });
    }catch(err){
        return res.json({message:"Could not show cards.", err:err})
    }
    res.json({
        message: "PinCards: ",
        pinCards: pinCards
    })

}

module.exports = showAllPinCards