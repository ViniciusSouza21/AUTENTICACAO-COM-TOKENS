import usuarios from "../models/Usuario.js";

class UsuariosController {

    static cadastrarUsuario = (req, res) => {
        let usuario = new usuarios (req.body);

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