import CodigoPostal from '#models/codigo_postal'
import Colonia from '#models/colonia'
import type { HttpContext } from '@adonisjs/core/http'

export default class ColoniasController {
  async getColonias({ response, request }: HttpContext) {
    const { estado, municipio, localidad } = request.body()
    const cps = await CodigoPostal.query()
      .distinct('cp')
      .where('estado', estado)
      .andWhere('municipio', municipio)
      .andWhere('localidad', localidad)
    const cpsFiltered = cps.map((cp) => cp.cp)
    const colonias = await Colonia.query().whereIn('cp', cpsFiltered)
    console.log(colonias.length)
    return response.ok(colonias)
  }
}
