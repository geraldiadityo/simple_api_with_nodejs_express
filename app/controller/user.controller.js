const User = require("../model/user.model.js");

exports.create = (req, res) => {
    if (!req.body){
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
    });

    User.create(user, (err, data) => {
        if (err){
            res.status(500).send({
                message: err.message || "some error occured while creating the user ."
            });
        }
        else {
            res.send(data);
        }
    });
};

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err){
            res.status(500).send({
                message: err.message || "Some error occured while retrieving users."
            });
        }
        else{
            res.send(data);
        }
    });
};

exports.findOne = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if (err){
            if (err.kind === "not_found"){
                res.status(404).send({
                    message:`not found user with id ${req.params.id}`
                });
            }
            else {
                res.status(500).send({
                    message:"Error retrieving user with id "+ req.params.id
                });
            }
        }
        else {
            res.send(data);
        }
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    }

    console.log(req.body);

    User.updateById(req.params.id, new User(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found"){
                res.status(404).send({
                    message: `not found user with id ${req.params.id}`
                });
            }
            else {
                res.status(500).send({
                    message: "Error updating user with id "+req.params.id
                });
            }
        }
        else{
            res.send(data);
        }
    });
};

exports.delete = (req, res) => {
    User.remove(req.params.id, (err, data) => {
        if (err){
            if (err.kind === "not_found"){
                res.status(404).send({
                    message:`not found user with id ${req.params.id}`
                });
            }
            else{
                res.status(500).send({
                    message: "Couldn't delete user with id "+req.params.id
                });
            }
        }
        else{
            res.send({
                message: "user was deleted successfully"
            });
        }
    });
};
