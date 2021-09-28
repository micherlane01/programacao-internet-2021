import express,{Request, Response} from "express"

import { ServicoController } from "./src/presentation/controllers/servicoController";



const app = express()
app.use(express.json())
const port = 3000

const servicoController = new ServicoController();

app.get('/servicos', servicoController.read)

app.post('/servicos', servicoController.create)

app.put('/servicos/:id', servicoController.update)

app.delete('/servicos/:id', servicoController.delete)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


