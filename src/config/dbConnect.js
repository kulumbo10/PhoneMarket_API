import mongoose, { mongo } from "mongoose";




async function conectaNaDatabase () {
    mongoose.connect("mongodb+srv://cloudten10x:DraxPro99@cluster2.xbk1upf.mongodb.net/store_001?retryWrites=true&w=majority&appName=Cluster2");

    return mongoose.connection;
};

export default conectaNaDatabase;