import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'localidad'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('clave', 2).notNullable()
      table.string('estado', 3).notNullable()
      table.string('descripcion', 100).notNullable()
      table.primary(['clave', 'estado'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
