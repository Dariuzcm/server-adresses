import Estado from '#models/estado'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'

export default class EstadosController {
  async getAllEstados({ response }: HttpContext) {
    try {
      const estados = await Estado.query().orderBy('nombre_estado', 'asc')
      return response.ok(estados)
    } catch (error) {
      response.abort(error.message)
      logger.error(error.message, 'Error happends on getAllEstados')
    }
  }
}
