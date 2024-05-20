import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Estado extends BaseModel {
  static table = 'estado'

  @column({ isPrimary: true })
  declare clave: string

  @column({ columnName: 'nombre_estado' })
  declare nombreEstado: string

  @column()
  declare pais: string
}
