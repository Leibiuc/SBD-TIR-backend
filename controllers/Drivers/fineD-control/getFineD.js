const FineD = require('../../../models/Drivers/fineD');

const showAllFinesD = async (req, res, next) => {
    let fines
    try {

        fines = await FineD.find().exec();

        if (!fines)
            return res.json({
                message: " No fines found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show fines.", err: err })
    }
    res.json({
        message: "Fines: ",
       fines: fines
    })

}

module.exports = showAllFinesD