const License = require('../../../models/Drivers/license');

const showAllLicenses = async (req, res, next) => {
    let licenses
    try {

        licenses = await License.find().exec();

        if (!licenses)
            return res.json({
                message: " No license found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show licenses.", err: err })
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
      licenses.sort(compare); 

    res.json({
        message: "Licenses: ",
        license: licenses
    })

}

module.exports = showAllLicenses