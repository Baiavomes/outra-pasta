const { Router} = require("express");
const professorControlle = require("./controle/professorControlle")
const alunoprofessorControlle = require("./controle/alunoprofessorControlle")

const router = Router()

router.post("/criarProfessor", professorControlle.criarProfessor);
router.get("/professor/:id", professorControlle.buscarprofessor);

router.post("/criaAluno", alunoprofessorControlle.criaAluno );
router.get("/:professoId/alunos", alunoprofessorControlle.buscarAluno);

module.exports = {router}