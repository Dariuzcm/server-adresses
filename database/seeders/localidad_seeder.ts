import { localidad } from '#database/seedData/localidad'
import Localidad from '#models/localidad'
import logger from '@adonisjs/core/services/logger'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const length = localidad.length
    const step = 900
    const range = length / step
    logger.info({}, 'Begining migrate Localidad')
    let indexInfo = 0
    for (let index = 0; index <= range; index++) {
      indexInfo = index
      let start = index * step || 0
      const end = start + step

      const splitted = localidad.slice(start, end)
      const generator: Localidad['$attributes'][] = splitted.map((g) => ({
        clave: g[0]!,
        estado: g[1]!,
        descripcion: g[2],
      }))

      await Localidad.createMany(generator)
      console.log({ indexInfo, start, end, page: generator.length })
    }
    logger.info(null, 'Migration Localidad Finished')
  }
}
