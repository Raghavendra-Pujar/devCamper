
exports.getBootCamps = (req,res)=>{
    res.status(200).json({name:'Raghu-Get'})

}

exports.createBootCamp = (req,res)=>{
    res.status(200).json({name:'Raghu-Post'})
}

exports.getBootCamp = (req,res)=>{
    res.status(200).json({name: 'Raghu-GetSingle ' + req.params.id})
}

exports.updateBootCamp = (req,res)=>{
    res.status(200).json({name: 'Raghu-Put ' + req.params.id})
}

exports.deleteBootCamp = (req,res)=>{
    res.status(200).json({name: 'Raghu-Delete '+ req.params.id})
}