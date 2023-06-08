const pigModel = require("../pigModel/pig")

// to create a school data

const createFarm = async(req,res)=>{
    try{

    const createdPigfarm = await pigModel["create"](req.body)
    createdPigfarm["save"]()
    res["status"](200)["json"]({
        message: "the data was created successfully",
        data: createdPigfarm
    })
}catch(error){
    res.status(400).json("unable to create file")
}};

 
// to read all data

const readallPigs = async(req,res)=>{
    try{

    const readPigs = await pigModel["find"]()
    res["status"](200)["json"]({
        message: "the data was created successfully",
        data: readPigs
    })
}catch(error){
    res["status"](400)["json"]("unable to create file")
}}


// to get one by id

const readonePig = async(req,res)=>{
    try{
    const id= req["params"]["id"]
    const onePig = await pigModel.findById(id)
    res["status"](200)["json"]({
        message: `this is the information for pig id ${id}`,
        data: onePig
    })
}catch(error){
    res["status"](400)["json"]("unable to create file")
}}

// find by pig name

const findPig = async(req,res)=>{
    try{
    const {name}= req["params"]
    const Pigs = await pigModel["findOne"]({name})
    res["status"](200)["json"]({
        message: "this is the information searched by name",
        data: Pigs
    })
}catch(error){
    res["status"](400)["json"]("unable to view")
}}

// updating one file

const updateonePig = async(req,res)=>{
    try{
    const id= req[params][id]
    const updatedinfo= {
        bread: req["body"]["bread"] || pigModel["bread"],
        colour: req["body"]["colour"] || pigModel["colour"],
        name: req["body"]["name"] || pigModel["name"],
        weight: req["body"]["weight"] || pigModel["weight"],
        age: req["body"]["age"] || pigModel["age"],
        isMatured: req["body"]["isMatured"] || pigModel["isMatured"]
    }
    const newinfo = await pigModel.findByIdAndUpdate(id, updatedinfo)
    res["status"](200)["json"]({
        message: "this school information has been updated",
        data: updatedinfo
    })
}catch(error){
    res["status"](400)["json"]("unable to update file")
}}


// deleting one school

const deleteonePig = async(req,res)=>{
    try{
    const id= req["params"]["id"]
    const deletedPig = await pigModel["findByIdAndDelete"](id)
    res["status"](200)["json"]({
        message: "this school information has been deleted",
        data: deletedPig
    })
}catch(error){
    res["status"](400)["json"]("unable to create file")
}}

// getting if any is sold 1

const soledPigs = async(req,res)=>{
    try{
    const {Soled}= req["params"]
    const Pigsoled = await pigModel["find"]({Soled})
    res["status"](200)["json"]({
        message: "this is the information of all pigs that has been soled or still available",
        data: Pigsoled
    })
}catch(error){
    res["status"](400)["json"]("unable to view")
}}


// getting sold 2

const sellout = async(req,res)=>{
    try{
    const id= req["params"]["id"]
    const Pigsoled = await pigModel.findByIdAndUpdate(id,{Soled:true})
    const details = await pigModel.findById(id).select("name")
    res["status"](200)["json"]({
        message: `animal with the id ${id} has been sold`, "details of the animal is":details
    })
}catch(error){
    res["status"](400)["json"]("unable to view")
}}


module.exports={createFarm, readallPigs, readonePig, deleteonePig, updateonePig, findPig, soledPigs, sellout}