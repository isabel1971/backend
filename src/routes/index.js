import express from "express";
import cadastros from "./cadastroRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("AV2.js"));

  app.use(express.json(), cadastros);
};

export default routes;