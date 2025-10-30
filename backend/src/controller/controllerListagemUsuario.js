import businessListagemUsuario from "../business/businessListagemUsuario.service.js"

export default async function controllerListagemUsuario (req, res, next) {
    let param = req.param
    
    let response = await businessListagemUsuario(param)
}