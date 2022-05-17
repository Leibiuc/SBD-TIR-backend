const TahoCard = require('../../../models/Drivers/tahoCard');

const showAllTahoCards = async (req, res, next) => {
    let tahoCards
    try {

        tahoCards = await TahoCard.find().exec();

        if (!tahoCards)
            return res.json({
                message: " No taho cards found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show taho cards.", err: err })
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
      tahoCards.sort(compare); 
    res.json({
        message: "TahoCards: ",
       tahoCards: tahoCards
    })

}

module.exports = showAllTahoCards