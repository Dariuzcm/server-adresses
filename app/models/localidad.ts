import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Localidad extends BaseModel {
  static table = 'localidad'

  @column({ isPrimary: true })
  declare clave: string

  @column()
  declare estado: string

  @column()
  declare descripcion: string
}
