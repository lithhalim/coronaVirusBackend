
const FavorateModel=require("../../model/FavorateModel/FavorateModel");


module.exports=async(req,res)=>{
    const datause=await FavorateModel.findAll();
    res.json(datause)
}