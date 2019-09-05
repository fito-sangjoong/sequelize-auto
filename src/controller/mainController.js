const deviceModel = require('../models').device;

const test = async(req,res,next) => {
    try {
        const device = await deviceModel.findAndCountAll();
        console.log(device.count);
        console.log(device.rows[0].idf_device);
        res.end('test' , {device});
    }catch(error) {
        console.error(error);
        next(error);
    }
};



const controller = {
    test
};

module.exports = controller;