import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import CodigoPostal from './codigo_postal.js'
import Colonia from './colonia.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Record extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare calle: string

  @column()
  declare cp: string

  @column()
  declare colonia: string

  @belongsTo(() => CodigoPostal, { foreignKey: 'cp', localKey: 'cp' })
  declare codigoPostal: BelongsTo<typeof CodigoPostal>

  @belongsTo(() => Colonia, { foreignKey: 'colonia', localKey: 'clave' })
  declare coloniaRecord: BelongsTo<typeof Colonia>
}
