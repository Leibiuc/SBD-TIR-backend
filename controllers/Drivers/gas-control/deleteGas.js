const Gas = require('../../../models/Drivers/gas');
const deleteGas = async (req, res, next) => {
    const gasID = req.params.gasID;

    let gas;
    try {
        gas = await Gas.findById(gasID);
    } catch (err) {
        return res.status(500).json("Deleting gas failed! ")
    }

    try {
        await gas.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting gasa has failed! ", error: err })
    }
    return res.status(200).json({ message: "gas deleted.", gas: gas })
}

module.exports = deleteGas