import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estado'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('clave', 3).notNullable().primary()
      table.string('pais', 4).notNullable()
      table.string('nombre_estado', 100).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
