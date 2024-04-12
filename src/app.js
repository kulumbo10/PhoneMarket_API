import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connectDb = await conectaNaDatabase();

connectDb.on("error", (erro) => {
    console.error("connection failed", erro);
});

connectDb.once("open", () => {
    console.error("Connection to database sucessfully...");
});

const app = express();
routes(app);


//app.use(express.json());  responsabilidade passada ao



// const smartPhone_Stores = [

//     {
//         id: 1,
//         brand: "Iphone 10"
//     },
    
//     {
//         id: 2,
//         brand: "Samsung Note10"
//     }
// ];
//      ESSA FUNCAO USAVAMOS DEVIDO AO DB LOCAL EM ARRAY
// function lookingPhone (id) {
// return smartPhone_Stores.findIndex(id);
// return  smartPhone_Stores.id === Number(id);
// };

// app.get("/phones", async (req, res) => {
//     const listPhones = await phone.find({});
// res.status(200).json(listPhones);
// });

// app.post("/phones", (req, res) => {
// smartPhone_Stores.push(req.body);   //req.body      e o corpo da requisicao
// res.status(201).send("smartPhone registed sucessfully");
// });


//esta requisicao estao ligados com a function acima
// app.get("/phones/:id", (req, res) => {
// const index = lookingPhone(req.params.id);
// res.status(201).json(smartPhone_Stores[index]);
// });

// app.put("/phones/:id", (req, res) => {
// const index = lookingPhone(req.params.id);
// smartPhone_Stores[index].title = req.body.title;
// res.status(200).json(smartPhone_Stores);
// });

app.delete("/phones/:id", (req, res) => {
    const index = lookingPhone(req.params.id);
    lookingPhone.splice(index, 1);
    res.status(200).send("Smartphone deleted");
});



export default app;

//mongodb+srv://cloudten10x:DraxPro99@cluster2.xbk1upf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2