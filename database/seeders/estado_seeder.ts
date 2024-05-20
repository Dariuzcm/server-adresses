import { estado } from '#database/seedData/estado'
import Estado from '#models/estado'
import logger from '@adonisjs/core/services/logger'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    logger.info(null, 'Begining migrate Estado')

    const estadosMapped: Estado['$attributes'][] = estado.map((es) => ({
      clave: es[0],
      pais: es[1],
      nombreEstado: es[2],
    }))
    await Estado.createMany(estadosMapped)
    logger.info(null, 'Migration Estado Finished')
  }
}
