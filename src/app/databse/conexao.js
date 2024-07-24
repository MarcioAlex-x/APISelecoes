import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host:'127.0.0.1',
    port: '3306',
    user: 'root',
    password:'root',
    database:'db_copas'
})

conexao.connect()


/**
 * Executa um código sql com ou sem parametros
 * @param {string} sql instrução sql que será executada 
 * @param {string=id | [selecao, id]} valores valores que serão passados para o sql
 * @param {string} mensagemReject mensagem que será exbida
 * @returns objedto da Prommise
 */
export const consulta = (sql, valores='', mensagemReject) =>{
    return new Promise((resolve, reject)=>{
        conexao.query(sql, valores, (erro, resultado)=>{
            if(erro) return reject(mensagemReject)
                const resposta = JSON.parse(JSON.stringify(resultado))
                return resolve(resposta)
        })
    })
}

export default conexao
