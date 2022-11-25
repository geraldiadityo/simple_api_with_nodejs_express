module.exports = app => {
    const users = require("../controller/user.controller.js");

    let router = require("express").Router();
    
    router.post("/",users.create);

    router.get("/",users.findAll);

    router.get("/:id",users.findOne);

    router.put("/:id",users.update);

    router.delete("/:id",users.delete);

    app.use("/api/user",router);
};
