import conexao from "../databse/conexao.js"
import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController{
/**
 * Parametros de requisição e resposta
 * @param {params} req parametros de requisições
 * @param {params} res parametros de respostas
 */
    async store(req,res){
        const selecao = req.body
        const createRow = await SelecaoRepository.create(selecao)
        res.json(createRow)
    }

    async index(req, res){
       const selecoes = await SelecaoRepository.findAll()
       res.json(selecoes)
    }
    
    async show(req, res){
        const id = req.params.id
        const selecao = await SelecaoRepository.findById(id)
        res.json(selecao)
    }
    
    async update(req, res){        
        const id = req.params.id
        const selecao = req.body
        const atualizacao = await SelecaoRepository.update(selecao, id)
        res.json(atualizacao)
    }

    
    async delete(req, res){
        const id = req.params.id
        const selecao = await SelecaoRepository.delete(id)
        res.json(selecao)
    }
}

export default new SelecaoController
