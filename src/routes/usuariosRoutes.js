import express from "express";
import UsuariosController from "../controllers/usuariosController.js";

const router = express.Router();

router
    .post("/usuarios", UsuariosController.cadastrarUsuario);

export default router;