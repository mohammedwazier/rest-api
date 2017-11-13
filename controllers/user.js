const Model=require("../models").user;

const signup=(req,res)=>{
    const inputData={
        username:req.body.username,
        password:req.body.password,
        isAdmin:false
    }
    Model.create(inputData).then((stats)=>{
        res.send(stats);
    }).catch((err)=>{
        console.log(err);
    });
}

const signin=(req,res)=>{
    res.send({
        id:req.id,
        token:req.token
    });
}

const getAllUsers=(req,res)=>{
    Model.findAll().then((users)=>{
        res.send(users)
    }).catch((err)=>{
        console.log(err);
    });
}

const getUserById=(req,res)=>{
    Model.findById(req.params.id).then((user)=>{
        res.send(user);
    }).catch((err)=>{
        console.log(err);
    });
}

const createUser=(req,res)=>{
    const inputData={
        username:req.body.username,
        password:req.body.password,
        isAdmin:req.body.isAdmin
    }
    Model.create(inputData).then((stats)=>{
        res.send(stats);
    }).catch((err)=>{
        console.log(err);
    });
}

const deleteUser=(req,res)=>{
    Model.destroy({
        where:{
            id:req.params.id
        }
    }).then((stats)=>{
        res.send({
            id:req.params.id
        });
    }).catch((err)=>{
        console.log(err);
    });
}

const updateUser=(req,res)=>{
    Model.update({
        username:req.body.username,
        password:req.body.password,
        isAdmin:req.body.isAdmin
    },{
        where:{
            id:req.params.id
        }
    }).then((stats)=>{
        res.send(stats);
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports={
    getAllUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser,
    signup,
    signin
};
