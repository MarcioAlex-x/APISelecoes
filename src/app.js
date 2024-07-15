import express from 'express'
import SelecaoCopaController from './app/controllers/SelecaoController.js'

const app = express()
app.use(express.json())
app.post('/selecoes', SelecaoCopaController.store)
app.get('/selecoes', SelecaoCopaController.index)
app.get('/selecoes/:id',SelecaoCopaController.show)
app.put('/selecoes/:id', SelecaoCopaController.update)
app.delete('/selecoes/:id', SelecaoCopaController.delete)

export default app 
