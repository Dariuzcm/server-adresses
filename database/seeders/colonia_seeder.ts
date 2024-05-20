import { colonia } from '#database/seedData/colonia'
import Colonia from '#models/colonia'
import logger from '@adonisjs/core/services/logger'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const length = colonia.length
    const step = 900
    const range = length / step
    logger.info(null, 'Begining migrate Colonia')
    let indexInfo = 0
    for (let index = 0; index <= range; index++) {
      indexInfo = index
      let start = index * step || 0
      const end = start + step

      const splitted = colonia.slice(start, end)
      const generator: Colonia['$attributes'][] = splitted.map((g) => ({
        clave: g[0]!,
        cp: g[1]!,
        descripcion: g[2],
      }))

      await Colonia.createMany(generator)
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
    logger.info(null, 'Migration Colonia Finished')
  }
}
