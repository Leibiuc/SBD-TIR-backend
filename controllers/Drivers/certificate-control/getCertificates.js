const Certificate = require('../../../models/Drivers/certificate');

const showAllCertificates = async (req, res, next) => {
    let certificates
    try {

        certificates = await Certificate.find().exec();

        if (!certificates)
            return res.json({
                message: " No certificates found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show certificates.", err: err })
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
      certificates.sort(compare);   
    res.json({
        message: "Certificates: ",
       certificates: certificates
    })

}

module.exports = showAllCertificates