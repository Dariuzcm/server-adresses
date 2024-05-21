import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'records'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('cp', 9).notNullable()
      table.string('calle', 100).notNullable()
      table.string('colonia', 6)

      table.foreign('cp').references('codigo_postal.cp')
      table.foreign('colonia').references('clave')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
