import express from "express";
import CadastroController from "./controllers/cadastroController.js";

const routes = express.Router();

routes.get('/cadastros', CadastroController.listarCadastros);
routes.get('/cadastros/:id', CadastroController.listarCadastroPorId);
routes.post('/cadastros', CadastroController.cadastrarCadastro);
routes.put('/cadastros/:id', CadastroController.atualizarCadastro);
routes.delete('/cadastros/:id', CadastroController.excluirCadastro);

export default routes
