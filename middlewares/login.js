const Model=require("../models").user;
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
require("dotenv").config();

const checkLogin=(req,res,next)=>{
    Model.findOne({
        where:{
            username:req.body.username
        }
    }).then((user)=>{
        if(user !== null){
            bcrypt.compare(req.body.password,user.password).then((result)=>{
                if(result){
                    jwt.sign({
                        id:user.id,
                        username:user.username,
                        password:user.password,
                        isAdmin:user.isAdmin
                    },process.env.SECRET_KEY,(err,token)=>{
                        if(err){
                            res.send(err);
                        }else{
                            req.id=user.id;
                            req.token=token;
                            next();
                        }
                    });
                }else{
                    res.send("Password salah!");
                }
            });
        }else{
            res.send("User tidak ditemukan!");
        }
    }).catch((err)=>{
        console.log(err);
    });
}

const isLoggedIn=(req,res,next)=>{
    if(req.headers.token == null){
        res.send("Please login!");
    }else{
        jwt.verify(req.headers.token,process.env.SECRET_KEY,(err,decoded)=>{
            req.user=decoded
            next();
        });
    }
}

const checkAdmin=(req,res,next)=>{
    if(req.user.isAdmin){
        next();
    }else{
        res.send("Ye gabisa!");
    }
}

const checkOwner=(req,res,next)=>{
    if(req.user.isAdmin){
        next();
    }else if(!req.user.isAdmin && req.user.id == req.params.id){
        req.body.isAdmin=false;
        next();
    }else{
        res.send("Siapa lu?");
    }
}

module.exports={
    isLoggedIn,
    checkLogin,
    checkAdmin,
    checkOwner
};
