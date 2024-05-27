import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'codigo_postal'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('cp', 6).notNullable().unique()
      table.string('estado', 3)
      table.string('municipio', 3)
      table.string('localidad', 2)
      table.foreign(['localidad', 'estado']).references(['localidad.clave', 'localidad.estado'])
      table.foreign(['municipio', 'estado']).references(['municipio.clave', 'municipio.estado'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
