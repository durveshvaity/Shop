const mongoose =require('mongoose');


const connectDB= async()=>{
    try{

        const con = await mongoose.connect("mongodb+srv://admin:User123@cluster0.i0ipq.mongodb.net/products?retryWrites=true&w=majority", {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;