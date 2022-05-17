const Statistic = require('../../../models/Evidences/statistics');
const deleteStatistic = async (req, res, next) => {
    const statisticID = req.params.statisticID;

    let statistic;
    try {
        statistic = await Statistic.findById(statisticID);
    } catch (err) {
        return res.status(500).json("Deleting statistic failed! ")
    }

    try {
        await statistic.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting statistic has failed! ", error: err })
    }
    return res.status(200).json({ message: "statistic deleted.", statistic: statistic })
}

module.exports = deleteStatistic