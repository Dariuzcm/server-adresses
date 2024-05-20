import Localidad from '#models/localidad'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'

export default class LocalidadsController {
  async getLocalidad({ request, response }: HttpContext) {
    const municipioClave = request.param('municipioClave')
    try {
      const municipios = await Localidad.findManyBy('estado', municipioClave)
      logger.info('Getting municipios by ' + municipioClave)
      return response.ok(municipios)
    } catch (error) {
      response.abort(error.message + 'Error happend on LocalidadsController.getMunicipio')
    }
  }
}
