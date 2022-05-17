const Statistic = require('../../../models/Evidences/statistics');

const showAllStatistics = async (req, res, next) => {
    let statistics
    try {

        statistics = await Statistic.find().exec();

        if (!statistics)
            return res.json({
                message: " No statistics  found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show statistics.", err: err })
    }
    res.json({
        message: "Statistics: ",
        statistics: statistics
    })

}

module.exports = showAllStatistics