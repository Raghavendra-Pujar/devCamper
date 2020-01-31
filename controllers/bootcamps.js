const BootCamp = require('../models/Bootcamp')
const ErrorResponse = require('../utils/errorResponse');


// @desc   Fetch all the BootCamps
// @route  Get /api/v1/bootcamps
// @access Public
exports.getBootCamps = async (req,res,next)=>{

    try{
        const bootcamp = await BootCamp.find()

        if(!bootcamp){
            return res.status(400).json({
                success: false,
                msg: err.message
            })
        }

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
// @route  Post /api/v1/bootcamps
// @access Public
exports.createBootCamp = async (req,res,next)=>{
    try{

        const bootcamp = await BootCamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp
        })
    }
    catch(err) {
       next(err);
    }

}

// @desc   Fetch the BootCamp
// @route  Get /api/v1/bootcamps
// @access Public
exports.getBootCamp = async (req,res,next)=>{


    try{

        const bootcamp = await BootCamp.findById(req.params.id)

        if(!bootcamp){
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404)
            );
        }
        res.status(201).json({
            success: true,
            data: bootcamp
        })
    }
    catch(err) {
        next(err);
    }
   
}

// @desc   Update the BootCamp
// @route  Put /api/v1/bootcamps
// @access Public

exports.updateBootCamp = async (req,res,next)=>{

    try {
        const bootcamp = await BootCamp.findByIdAndUpdate(req.params.id,req.body,
            {
                new: true,
                runValidators: true
            });
        //use new:true to return the updated object
        if(!bootcamp){
            return  next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404)
            );
        }

        res.status(201).json({
            success: true,
            data: bootcamp
        })
    } catch (err) {
        next(err)
    }
   
}

// @desc   Delete the BootCamp
// @route  Delete /api/v1/bootcamps
// @access Public
exports.deleteBootCamp = async (req,res,next)=>{
    try {
        const bootcamp = await BootCamp.findByIdAndRemove(req.params.id);
        //use new:true to return the updated object
        if(!bootcamp){
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404)
            );
        }

        res.status(201).json({
            success: true,
            data: bootcamp
        })
    } catch (err) {
        next(err);
    }
}