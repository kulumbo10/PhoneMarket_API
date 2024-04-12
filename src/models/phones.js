import mongoose from "mongoose";

const phoneSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},		
    title: { type: String, required: true },	
    production: { type: String, required: true },
    price: { type: Number},
    release: { type: Number }
    }, {versionKey: false});

        //params: collection name and schema
    const phone = mongoose.model("store_001", phoneSchema); 
    
    export default phone;