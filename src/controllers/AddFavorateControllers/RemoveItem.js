const FavorateModel=require("../../model/FavorateModel/FavorateModel");

module.exports=async(req,res)=>{
    const datause=await FavorateModel.destroy({where:{id:req.params.data}})
    res.json("delete item")
}