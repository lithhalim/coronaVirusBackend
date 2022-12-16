
const FavorateModel=require("../../model/FavorateModel/FavorateModel");
module.exports=async(req,res)=>{
    let datause= await FavorateModel.findAll({where:{id:`${req.body.id}`}})
    if(datause.length>0){
        res.json("The item that was actually selected is already on favourites")
    }else{
    const datacreate= await FavorateModel.create(req.body);
    res.json("The requested item has been added to my favourites")
    }


}