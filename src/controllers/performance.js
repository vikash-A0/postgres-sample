const Performance = require('../models/performance');
const Schema = require('../schema/performance schema');

exports.createOne = async(req,res,next) =>{
    // console.log('Inside Controller');
    // console.log(req.body);
    // const performancemodel = {
       
    //     computer_name: req.body ['computer_name'],
    //     cpu_percentage: parseInt (req.body ['cpu_percentage']),
    //     memory_percentage: parseInt(req.body ['memory_percentage']),
    //     storage_percentage:parseInt(req.body ['storage_percentage']),
       

    // };

    // try{
    //     console.log(performancemodel.cpu_percentage);
    //     if(performancemodel.length>0){
            
    //          console.log('Performance Created');
    //          try{
    //              const value = await loginSchema.validate({cpu_percentage: req.body['cpu_percentage'],memory_percentage:req.body['memory_percentage'],storage_percentage: req.body ['storage_percentage']});
    //              const performance = await Performance.create(performancemodel);
    //              res.status(200).json(performance);
    //          }catch{
    //              res.status(300).json("enter a valid percentage");
    //          }
             
    //     }else{
    //         console.log("unentered data");
    //         res.status(500).json("unentered data");
    //     }
    // }
    // catch(e){
    //     console.log(e);
    //     res.status(500).json("error");
    // }
    try{
        console.log("inside create controller")
        const value = await Schema.validate({computer_name: req.body['computer_name'], cpu_percentage: req.body['cpu_percentage'],memory_percentage:req.body['memory_percentage'],storage_percentage: req.body ['storage_percentage']});
        console.log(value.error);
        if(value.error){
            res.status(500).json({message: "invalid entry"});
        }else{
            console.log('valid');
            res.status(200).json(value);
        }
    }catch(error){
        console.log("error");
    }
};

exports.getAll = async (req,res,next) =>{

    try{
        if(req.cookies['Log in']){
          console.log("user authentication success");
          const performance = await Performance.findAll({
              limit : 2,
          });
          res.status(200).json(performance);
        }else{
            // console.log("unauthorised user");
            res.status(500).json({message: "unauthorised user"});
        }
    }
    catch(e){
        console.log(e);
        res.status(500).json(e);
    }
}

exports.deleteOne = async(req,res,next) =>{
    try {
        const performance = await Performance.destroy({ where : {id : req.params.id }});
        res.status(200).json("sucessfully deleted");
    } catch (error) {
        console.log(error);
        res.status(500).json(e);
    }
}