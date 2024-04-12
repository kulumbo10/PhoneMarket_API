import express from "express";
import phones from "./phoneRoutes.js";

//servico das middleware para centralizar as rotas
const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Testing apis..."));

    app.use(express.json(), phones);    //este phone esta a vir de routes importado acima
};

export default routes;