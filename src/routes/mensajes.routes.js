import MensajesDaos from "../daos/mensajes/MensajesDaosMongodb.js";
import express from "express";

const routerMensajes = express.Router();

const ApiMensajes = new MensajesDaos('MENSAJES');
let MENSAJES;

routerMensajes.get( "/", async (req, res) => {
    MENSAJES = await ApiMensajes.getAll();
    req.io.emit('from-server-mensajes', {MENSAJES});
})

routerMensajes.post( "/mensajes", async (req, res) => {
    await ApiMensajes.insertar(req.body);
    MENSAJES = await ApiMensajes.getAll();
    req.io.emit('from-server-mensajes', {MENSAJES});
    res.redirect('/');

});

export default routerMensajes;