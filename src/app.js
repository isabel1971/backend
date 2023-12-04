import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
})

const app = express();
routes(app);

app.delete("/cadastros/:id", (req, res) => {
  const index = buscaCadastro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Cadastro removido com sucesso");
});

export default app;
