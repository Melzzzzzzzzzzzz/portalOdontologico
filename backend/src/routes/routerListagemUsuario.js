import { Router } from "express"
import controllerListagemUsuario from "../controller/controllerListagemUsuario.js"

const router = Router()

router.get("/listar-usuario", controllerListagemUsuario)