module.exports = app => {
    const users = require("../controller/user.controller.js");

    let router = require("express").Router();
    
    router.post("user/",users.create);

    router.get("user/",users.findAll);

    router.get("user/:id",users.findOne);

    router.put("user/:id",users.update);

    router.delete("user/:id",users.delete);

    app.use("/api/",router);
};
