import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'colonias'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('clave', 4).notNullable()
      table.string('cp', 6).notNullable()
      table.string('descripcion', 100).notNullable()
      table.primary(['clave', 'cp'])
      table.index('cp', 'idx_colonias_cp')
      table.foreign('cp').references('codigo_postal.cp')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
