const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const connect = require("./configs/db");

//controllers
const blockControllers = require("./controllers/block.controller");
const flatControllers = require("./controllers/flat.controller");
const managerController = require("./controllers/manager.controller");
const residentController = require("./controllers/resident.controller");
const {register, login} = require("./controllers/authentication.controller");



app.use(express.json());
app.use(cors());

app.use("/blocks", blockControllers);
app.use("/flats", flatControllers);
app.use("/managers", managerController);
app.use("/residents", residentController);
app.use("/register", register);
app.use("/login", login);


app.listen(port,async ()=>{
    try{
        await connect()
        console.log("Listening at the port" +port)
    }
    catch(err){
        console.log(err.message)
    }
})