import { codigoPostal } from '#database/seedData/codigo_postal'
import CodigoPostal from '#models/codigo_postal'
import logger from '@adonisjs/core/services/logger'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const length = codigoPostal.length
    const step = 900
    const range = length / step
    logger.info({}, 'Begining migrate Codigo Postal')
    let indexInfo = 0
    for (let index = 0; index <= range; index++) {
      indexInfo = index
      let start = index * step || 0
      const end = start + step

      const splitted = codigoPostal.slice(start, end)
      const generator: CodigoPostal['$attributes'][] = splitted.map((g) => ({
        cp: g[0]!,
        estado: g[1]!,
        municipio: g[2],
        localidad: g[3],
      }))

      await CodigoPostal.createMany(generator)
      logger.info({
        indexInfo,
        totalRows: length,
        start,
        end,
        pageSize: generator.length,
        range: range.toFixed(2),
        done: ((indexInfo / range) * 100).toFixed(2),
      })
    }
    logger.info(null, 'Migration Codigo Postal Finished')
  }
}
