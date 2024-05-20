import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Municipio extends BaseModel {
  static table = 'municipio'

  @column({ isPrimary: true })
  declare clave: string

  @column()
  declare estado: string

  @column()
  declare descripcion: string
}
