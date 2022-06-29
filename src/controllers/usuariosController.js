import usuarios from "../models/Usuario.js";
import bcrypt from "bcrypt";

class UsuariosController {

    static cadastrarUsuario = (req, res) => {
        let usuario = new usuarios (req.body);
        let senha = req.body.senha;

        usuario.senha = bcrypt.hashSync(senha, 8);
        usuario.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar o usuário.`});
            }
            else {
                res.status(201).send(usuario.toJSON());
            }
        });
    };

};

export default UsuariosController;