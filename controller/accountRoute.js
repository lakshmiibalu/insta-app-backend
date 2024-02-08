const express = require("express")
const accountModel = require("../models/accountModel")

const router = express.Router()

router.post("/add",async(req,res)=>{
    let data = req.body
    let account = new accountModel(data)
    let result = await account.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let data = await accountModel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input = req.body
    let data = await accountModel.find(input)
    res.json(data)
})

module.exports = router