import { consulta } from "../databse/conexao.js"

class SelecaoRepository{
    create(selecao) {
        const sql = 'INSERT INTO selecoes SET ?'
        return consulta(sql, selecao, 'Não foi possível salvar os dados')
        
    }

    findAll() {
        const sql = 'SELECT * FROM selecoes'
        return consulta(sql, 'Não foi possível localizar os dados')
    }

    findById(id) {
        const sql = 'SELECT * FROM selecoes WHERE id=?'
        return consulta(sql, id, 'Não foi possivel localizar a seleção')   
    }

    update(selecao, id) {
        const sql = 'UPDATE selecoes SET ? WHERE id=?'
        return consulta(sql, [selecao, id], 'Não foi possivel atualizar os dados')
    }

    delete(id) {
            const sql = 'DELETE FROM selecoes WHERE id=?'
           return consulta(sql, id, 'Não foi possível apagar os dados')
    }
}

export default new SelecaoRepository
