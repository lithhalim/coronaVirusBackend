const { TEXT } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")


module.exports=database.define("Favorates",{
    Country:{
        type:STRING,
    },
    Date:{
        type:TEXT,
    },
    TotalConfirmed:{
        type:TEXT,
    },
    TotalDeaths:{
        type:TEXT,
    },
    TotalRecovered:{
        type:TEXT,
    },
    id:{
        type:TEXT,
        primaryKey:true
    }


})


