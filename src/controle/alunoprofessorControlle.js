const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

module.exports = {
    async criaAluno(req, res) {
        const { nome, curso, professorId} = req.body;

        const alunoExiste = await prisma.aluno.findFist({
            where:{
                nome:nome,
                curso:curso
            }
        })
        if(alunoExiste){
            return res.json("Esse aluno ja existe");
        }
        try{
            const aluno = await prisma.aluno.create({
                data:{
                    nome,
                    curso,
                    professorId
                }
            })
            res.json(aluno);
    }catch(error) {
        console.error(error);
        res.status(500).json({error:"erro ao criar novo aluno"})
    }
    },
  


    async buscarAluno(req, res) {
        const {professorId} = req.params;

        try{
            const alunos = await prisma.aluno.findmay({
                where:{
                    professorId: parseInt(professorId)
                }
            })
            res.json(alunos)
        }catch(error){
            res.status(500).json({error: "Erro de busca de aluno"})
        }
    }

}