const mongoose = require("mongoose");
require("dotenv").config();
const myConnection = process.env.myConnection || "mongodb+srv://dhruv:dhruv@cluster0.dl1r4.mongodb.net/l&t_Apt";

const connect = () =>{
    return mongoose.connect(
        myConnection
    )
}

module.exports = connect;