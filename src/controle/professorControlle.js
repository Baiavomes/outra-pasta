const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")
const prisma = new PrismaClient();

module.exports ={
    async criarProfessor(req, res){
        try{
            const {nome, email, senha} = req.body;
            const professor = await prisma.professor.findUnique({
                where: {email}
            })
            if(professor){
                return res.json({error:"Esse email ja existe"})
            }
            await bcrypt.hash(senha, 10).then((hash) =>{
                prisma.professor.create({
                data: {
                    nome,
                    email,
                    senha:hash
                }
            }).then(() =>{
                res.json("Usuario criado");
            }).catch(() =>{
                res.json({error: "algo deu errado"})
            })
        })
        }catch(error){
            res.json({error: error})
        }
    },
    async buscarprofessor(req, res){
        const {id} = req.params;
        try{
            const professor = await prisma.professor.findUnique({
                where: {id: parseInt(id, 10)}
            })
            res.json(professor)
        }catch(error){
            res.json({error:error})
        }
}
}