const BootCamp = require('../models/Bootcamp')


exports.getBootCamps = async (req,res)=>{

    try{
        const bootcamp = await BootCamp.find()
        res.status(200).json({
            success: true,
            data: bootcamp
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
   

}
// @desc   Create new BootCamp
// @route  Get /api/v1/bootcamps
// @access Public
exports.createBootCamp = async (req,res)=>{
    try{

        const bootcamp = await BootCamp.create(req.body)

        if(!bootcamp){
            return res.status(400).json({
                success: false,
                msg: err.message
            })
        }
    
        res.status(201).json({
            success: true,
            data: bootcamp
        })
    }
    catch(err) {
        res.status(401).json({
            success: false,
            msg: err.message
        })
    }

}

exports.getBootCamp = async (req,res)=>{


    try{

        const bootcamp = await BootCamp.findById(req.params.id)
        res.status(201).json({
            success: true,
            data: bootcamp
        })
    }
    catch(err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
   
}

exports.updateBootCamp = (req,res)=>{
    res.status(200).json({name: 'Raghu-Put ' + req.params.id})
}

exports.deleteBootCamp = (req,res)=>{
    res.status(200).json({name: 'Raghu-Delete '+ req.params.id})
}