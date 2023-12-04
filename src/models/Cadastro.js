import mongoose from "mongoose";

const cadastroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  matricula: { type: String },
  CPF: { type: Number },
  CEP: { type: Number },
  email: { type: String },
  Senha: { type: String }
}, { versionKey: false });

const livro = mongoose.model("Cadastros", cadastroSchema);

export default cadastro;