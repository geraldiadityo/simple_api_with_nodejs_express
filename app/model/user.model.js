const sql = require("./db.js");

const User = function(user){
    this.name = user.name;
    this.email = user.email;
    this.gender = user.gender;

};

User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err){
            console.log("error: ",err);
            res(err, null);
            return;
        }
        console.log("create user : ",{id: res.insertId, ...newUser});
        result(null, {id:res.inserId,...newUser});
    });
};

User.findById = (id, result) => {
    sql.query(`SELECT * FROM user WHERE id = ${id}`, (err, res) => {
        if (err){
            console.log("error :",err);
            result(err,null);
            return;
        }
        
        if (res.length) {
            console.log("found user : ",res[0]);
            result(null, res[0]);
            return;
        }

        result({kind:"not found"}, null);
    });
};

User.getAll = (name, result) => {
    let query = "SELECT * FROM user";

    if (name){
        query += ` WHERE name like '%${name}%'`;
    }

    sql.query(query, (err, res) => {
        if (err){
            console.log("error :",err);
            result(null, err);
            return;
        }
        console.log("user: ",res);
        result(null, res);
    });
};

User.updateById = (id, user, result) => {
    sql.query(
        "UPDATE user SET name = ?, email = ?, gender = ? where id = ?",
        [user.name, user.email, user.gender, id],
        (err, res) => {
            if (err){
                console.log("error :",err);
                result(null, err);
                return;
            }
            
            if (res.affectedRows == 0){
                result({kind:"not found"}, null);
                return;
            }

            console.log("update user: ",{id:id,...User});
            result(null, {id:id,...user});
        }
    );
};

User.remove = (id, result) => {
    sql.query("DELETE FROM user WHERE id = ? ", id, (err, res) => {
        if (err){
            console.log("error: ",err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0){
            result({kind:"not found"}, null);
            return;
        }

        console.log("delete user with id ",id);
        result(null, res);
    });
};

module.exports = User;