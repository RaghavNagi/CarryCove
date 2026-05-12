const mongoose = require("mongoose")

async function connectDB(){
    await mongoose
    .connect(process.env.MONGO_URI)
    .then(function(){
        console.log("DB Connected")
    })
    .catch(function(err){
        console.log(err);
    })
}

module.exports = connectDB