import { municipio } from '#database/seedData/municipio'
import Municipio from '#models/municipio'
import logger from '@adonisjs/core/services/logger'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const length = municipio.length
    const step = 900
    const range = length / step
    logger.info({}, 'Begining migrate Municipio')
    let indexInfo = 0
    for (let index = 0; index <= range; index++) {
      indexInfo = index
      let start = index * step || 0
      const end = start + step

      const splitted = municipio.slice(start, end)
      const generator: Municipio['$attributes'][] = splitted.map((g) => ({
        clave: g[0]!,
        estado: g[1]!,
        descripcion: g[2],
      }))

      await Municipio.createMany(generator)
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
    logger.info(null, 'Migration Municipio Finished')
  }
}
