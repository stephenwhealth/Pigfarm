const express = require("express")
const router = express.Router()
const {createFarm, readallPigs, readonePig, deleteonePig, updateonePig, findPig, soledPigs, sellout} = require("../pigController/pigcontrollers")

router.get("/", (req,res)=>{
    res.send("WELCOME TO THE PIG API")
});

router.post("/create", createFarm)
router.get("/getall", readallPigs)
router.get("/getone/:id", readonePig)
router.delete("/deleteone/:id", deleteonePig)
router.put("/update/:id", updateonePig)
router.get("/Pigs/:name", findPig)
router.get("/Pigsoled/:Soled", soledPigs)
router.get("/getsold/:id", sellout)



module.exports=router