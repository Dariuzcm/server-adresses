import Env from '#start/env'
import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: Env.get('DB_CONNECTION', 'mssql'),
  connections: {
    sqlite: {
      client: 'better-sqlite3',
      connection: {
        filename: app.tmpPath('db.sqlite3'),
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
    mssql: {
      client: 'mssql',
      connection: {
        server: Env.get('DB_HOST', 'localhost'),
        host: Env.get('DB_HOST', 'localhost'),
        user: Env.get('DB_USER'),
        password: Env.get('DB_PASSWORD'),
        database: Env.get('DB_DATABASE'),
        port: 1434,
        options: {
          encrypt: false,
          trustServerCertificate: true,
          trustedConnection: true,
          multiSubnetFailover: false,
        },
      },
    },
  },
})

export default dbConfig
