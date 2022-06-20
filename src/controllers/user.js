// const { password } = require('pg/lib/defaults');
const User = require('../models/user');
const loginschema = require('../schema/validation schema');


exports.createOne = async(req,res,next) =>{
    // console.log('Inside Controller');
    const usermodel = {
        username: req.body['username'],
        password: req.body['password']
  
    };

    try{
        console.log("inside create controller");
        const user = await User.create(usermodel);
        console.log('User Created');
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json("error");
    }
};

exports.getAll = async(req,res,next) =>{
    console.log("am in");
    try {
        const users= await User.findAll({
            limit :5,
        });
        console.log('User Created');
        res.status(200).json(users);
    } catch (error) {
        console.log('An error occured', error);
        res.status(200).json(error);
    }
}
exports.deleteOne = async(req,res,next) =>{
    try {
        // console.log("delete controller");
        console.log(typeof parseInt(req.params.id));
        const users = await User.destroy({ where : {id : parseInt(req.body['id']) }});
        res.status(200).json({message: "sucessfully deleted"});
    } catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
}

exports.logIn = async(req,res,next) =>{
    try {
        // console.log("inside login controller");
      const users = await User.findAll({where : { username: req.body['username'], password: req.body['password']}});
      console.log(users);
      if (users.length>0){
          res.cookie("Log in","True");
          console.log("login sucessfull");
          res.status(200).json({message: "log in sucessfull"});
         }else{
        //   console.log("login not sucessfull");
          res.status(401).json({message:"log in not sucessfull"});
      }
      
  
    }
    catch(error) {
      console.log("error");
      res.status(500).json(error);
    }
  }
  

exports.logOut = async(req,res,next) =>{
    try {
        // console.log("inside logout controller");
        res.clearCookie('Log in');
        const data = res.status(200).json({message: "cookie deleted"});
    }
    catch(error) {
        console.log("error");
        res.status(500).json(error);
    }
  }

exports.validate= async(req,res,next)=>{
    try{ 
        console.log("inside validate controller");
        const value = await loginschema.validate({username: req.body['username'], password: req.body['password']});
        console.log(value);
        if(value.error){
            
            res.status(200).json({message: "invalid email or paSSword"});
        }else{
            if((value.value.username.length>0) && (value.value.password.length>0)){

                         console.log("valid email or password");
                         console.log(value.value.username);
                         const users =  await User.findAll({where : {username: value.value.username, password: value.value.password}});
                         console.log(users);
                         if(users.length>0){
                            res.cookie("Log in","True");
                            console.log("login sucessfull");
                            res.status(200).json({message:"log in sucessfull"});
                         }else{
                            res.status(401).json({message:"log in not sucessfull"});
                         }
                    }else{
                        res.status(500).json({message:"either username or password is nt entered"});
                    }
                }
            }
    catch (err) {
    res.status(500).json({message:"error"});
    }
}