const express = require("express");
const Manager = require("../models/manager.model");
const router = express.Router();

router.post("", async (req,res)=>{
    console.log(req.body)
    try{
        const manager = await Manager.create(req.body);
        return res.status(201).send(manager);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
});

router.get("",async(req,res)=>{
    try{
        const manager = await Manager.find().lean().exec();
        return res.status(201).send(manager);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
});

router.delete("/:id",async(req, res) =>{
    try {
        const manager = await Manager.findByIdAndDelete(req.params.id).lean().exec();
        res.send(manager);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});


module.exports = router;