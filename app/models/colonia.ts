import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Colonia extends BaseModel {
  static table = 'colonia'

  @column({ isPrimary: true })
  declare clave: string

  @column()
  declare cp: string

  @column()
  declare descripcion: string
}
