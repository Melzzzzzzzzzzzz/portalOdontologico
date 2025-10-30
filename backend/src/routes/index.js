import { Router } from "express"
import routerListagemUsuario from "./routerListagemUsuario"

const router = Router()

router('/backend', routerListagemUsuario)



export default { router }