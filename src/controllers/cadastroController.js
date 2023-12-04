import Cadastro from "../models/Cadastro.js";

class CadastroController {
  static async listarCadastros(req, res) {
    try {
      const listaCadastros = await Cadastro.find({});
      res.status(200).json(listaCadastros);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarCadastroPorId(req, res) {
    try {
      const id = req.params.id;
      const cadastroEncontrado = await Cadastro.findById(id);
      res.status(200).json(cadastroEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do cadastro` });
    }
  }

  static async cadastrarCadastro(req, res) {
    try {
      const novoCadastro = await Cadastro.create(req.body);
      res.status(201).json({ message: "criado com sucesso", cadastro: novoCadastro });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar novo cadastro` });
    }
  }

  static async atualizarCadastro(req, res) {
    try {
      const id = req.params.id;
      await Cadastro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Cadastro atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async excluirCadastro(req, res) {
    try {
      const id = req.params.id;
      await Cadastro.findByIdAndDelete(id);
      res.status(200).json({ message: "Cadastro excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };
};

export default CadastroController;
