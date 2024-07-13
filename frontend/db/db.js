const mongoose=require("mongoose");
module.exports=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Databse connect sucessfully");
    }catch(error){
        console.log(error)
        console.log("couldnot connect to database");
    }
}