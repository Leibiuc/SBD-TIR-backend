const Car = require('../../../models/Auto/car');

const showAllCars = async (req, res, next) => {
    let cars
    try{
    
     cars = await Car.find().exec();
    
    if (!cars)
        return res.json({
            message: " No cars found!"
        });
    }catch(err){
        return res.json({message:"Could not show Cars.", err:err})
    }
    res.json({
        message: "cars: ",
        cars: cars
    })

}

module.exports = showAllCars