const express = require('express')
const router = express.Router()





//ALL MEDILWARE FUNCTION ARE USE
const AddFavorate=require("../../controllers/AddFavorateControllers/AddNewFavorate");
const GetAllFavorate=require("../../controllers/AddFavorateControllers/GetAllFavorate");
const DeleteFavorate=require("../../controllers/AddFavorateControllers/RemoveItem");


//ALL ROUTES ARE USED
router.post("/AddFavorate",AddFavorate)
router.get("/GetAllFavorate",GetAllFavorate);
router.delete("/RemoveItem/:data",DeleteFavorate);



module.exports=router
