import Localidad from '#models/localidad'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'

export default class LocalidadsController {
  async getLocalidad({ request, response }: HttpContext) {
    const municipioClave = request.param('municipioClave')
    const { estado } = request.qs()
    if (!estado) {
      return response.abort('No hay estado seleccionado')
    }

    try {
      const municipios = await Localidad.query()
        .join('codigo_postal', 'codigo_postal.estado', 'localidad.estado')
        .select('localidad.*')
        .distinct()
        .where('codigo_postal.estado', estado)
        .andWhere('codigo_postal.municipio', municipioClave)

      logger.info('Getting municipios by ' + municipioClave + 'and estado ' + estado)
      return response.ok(municipios)
    } catch (error) {
      response.abort(error.message + 'Error happend on LocalidadsController.getMunicipio')
    }
  }
}
