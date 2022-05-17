const Statistic = require('../../../models/Evidences/statistics');
//////// NOT READY
const createStatistic = async (req, res, next) => {

    const {

        totalDrives,
        moneyCashed,
        kmDone,

    } = req.body

    let createdStatistic;

    try {

        createdStatistic = new Statistic({
            totalDrives,
            moneyCashed,
            kmDone,

        })

        await createdStatistic.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding statistic has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Statistic added!',
        statistic: createdStatistic
    });
};

module.exports = createStatistic;