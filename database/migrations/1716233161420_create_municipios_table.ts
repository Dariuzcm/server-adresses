import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'municipio'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('clave', 3).notNullable()
      table.string('estado', 3).notNullable()
      table.string('descripcion', 100).notNullable()
      table.primary(['clave', 'estado'])
      table.foreign('estado').references('estado.clave')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
