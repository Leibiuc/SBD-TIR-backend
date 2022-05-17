const Statistic = require('../../../models/Evidences/statistics');
//const Product = require('../../models/product');

const updateStatistic = async (req, res, next) => {
    const statisticID = req.params.statisticID;
    let statistic;
    const {kmDone, moneyCashed, totalDrives}= req.body;
    try {
        statistic = await Statistic.findById(statisticID);
        if (!statistic)
            return res.status(500).json({ message: "Could not find the statistic. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the statistic. ", err: err })
    }

    statistic.kmDone = kmDone;
    statistic.moneyCashed = moneyCashed;
    statistic.totalDrives = totalDrives;
   
    try {
        await statistic.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the statistic. ", err: err })
    }
    return res.status(200).json({ message: "Statistic updated.", statistic: statistic })
}

module.exports = updateStatistic