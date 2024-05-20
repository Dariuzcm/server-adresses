import Municipio from '#models/municipio'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'

export default class MunicipiosController {
  async getMunicipio({ request, response }: HttpContext) {
    const estadoClave = request.param('estadoClave')
    try {
      const municipios = await Municipio.findManyBy('estado', estadoClave)
      logger.info('Getting municipios by ' + estadoClave)
      return response.ok(municipios)
    } catch (error) {
      response.abort(error.message + 'Error happend on MunicipiosController.getMunicipio')
    }
  }
}
