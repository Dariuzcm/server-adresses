import CodigoPostal from '#models/codigo_postal'
import Colonia from '#models/colonia'
import Record from '#models/record'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'

export default class RecordsController {
  async getAll({ request, response }: HttpContext) {
    const { page = 1, size = 25 } = request.params()

    const records = await Record.query().orderBy('id', 'desc').paginate(page, size)
    const cp = records.map((record) => record.cp)
    const colonias = await Colonia.query()
      .whereIn(
        'clave',
        records.map((record) => record.colonia)
      )
      .whereIn('cp', cp)
    const codigosPostales = await CodigoPostal.query().whereIn('cp', cp)
    return response.ok({ records, colonias, codigosPostales })
  }

  async createRecord({ request, response }: HttpContext) {
    const { cp, calle, colonia }: Record['$attributes'] = request.body()
    try {
      const record = new Record()
      record.fill({
        cp,
        calle,
        colonia,
      })

      await record.save()
      await record.refresh()
      await record.load('codigoPostal')
      await record.load('coloniaRecord')
      logger.info(record, 'Record created')
      return response.created(record)
    } catch (error) {
      logger.error(error, 'Some error happends on create record')
      response.abort(error)
    }
  }

  async editRecord({ request, response }: HttpContext) {
    const { id } = request.param('id')
    const { cp, calle, colonia }: Record['$attributes'] = request.body()

    const record = await Record.findByOrFail('id', id)

    record.fill({
      cp,
      calle,
      colonia,
    })
    try {
      await record.save()
      response.ok(record)
    } catch (error) {
      logger.error(error, 'Some error happends on updating record')
      response.abort(error)
    }
  }

  async deleteRecord({ request, response }: HttpContext) {
    const { id } = request.param('id')
    const record = await Record.findByOrFail('id', id)
    try {
      record.delete()
      response.noContent()
    } catch (error) {
      logger.error(error, 'Some error happends on deleting record')
      response.abort(error)
    }
  }
}
