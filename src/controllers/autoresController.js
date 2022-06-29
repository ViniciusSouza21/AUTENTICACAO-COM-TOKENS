import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            if (err) {
                res.status(400).send({message: `${err.message} - Erro ao buscar os autores.`});
            }
            else {
                res.status(200).json(autores);
            }
        });
    };

    static listarAutoresPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({message: `${err.message} - Falha ao buscar o autor.`})
            }
            else {
                res.status(200).send(autores);
            }
        });
    };

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar o autor.`})
            }
            else {
                res.status(201).send(autor.toJSON());
            }
        })
    };

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: "Autor Atualizado com Sucesso!"});
            }
            else {
                res.status(500).send({message: `${err.message} - Falha ao atualizar o autor.`})
            }
        });
    };

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: "Autor Removido com Sucesso!"});
            }
            else {
                res.status(500).send({message: `${err.message} - Falha ao excluir o autor.`})
            }
        })
    };

};

export default AutorController;