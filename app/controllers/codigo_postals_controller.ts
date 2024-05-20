import CodigoPostal from '#models/codigo_postal'
import Colonia from '#models/colonia'
import Estado from '#models/estado'
import Localidad from '#models/localidad'
import Municipio from '#models/municipio'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'

export default class CodigoPostalsController {
  async getObjectByCodigoPostal({ request, response }: HttpContext) {
    const cp = request.param('codigo_postal')
    logger.info(null, `Finding Postal Code: ${cp}`)

    try {
      const cpostal = await CodigoPostal.findByOrFail('cp', cp)
      const estado = await Estado.findBy('clave', cpostal.estado)
      const municipio = await Municipio.query()
        .where('clave', cpostal.municipio!)
        .andWhere('estado', cpostal.estado)
        .first()
      const localidad = await Localidad.query()
        .where('clave', cpostal.localidad!)
        .andWhere('estado', cpostal.estado)
        .first()

      const colonia = await Colonia.findBy('cp', cp)

      response.ok({
        ...cpostal.serialize(),
        estado,
        municipio,
        localidad,
        colonia,
      })
    } catch (error) {
      logger.error(error)
      response.abort(error.message)
    }
  }
}
