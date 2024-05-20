import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Estado from './estado.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Municipio from './municipio.js'
import Localidad from './localidad.js'

export default class CodigoPostal extends BaseModel {
  static table = 'codigo_postal'

  @column({ isPrimary: true })
  declare cp: string

  @column()
  declare estado: string

  @column()
  declare municipio: string | null

  @column()
  declare localidad: string | null

  @hasOne(() => Estado, { foreignKey: 'clave', localKey: 'estado' })
  declare estadoRecord: HasOne<typeof Estado>

  @hasOne(() => Municipio, { foreignKey: 'clave', localKey: 'municipio' })
  declare municipioRecord: HasOne<typeof Municipio>

  @hasOne(() => Localidad, { foreignKey: 'clave', localKey: 'localidad' })
  declare localidadRecord: HasOne<typeof Localidad>
}
