/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import CodigoPostalRoutes from './routesControllers/codigo_postal_routes.js'
import { EstadoRoutes } from './routesControllers/estado_routes.js'
import { MunicipioRoutes } from './routesControllers/municipio_routes.js'
import { LocalidadRoutes } from './routesControllers/localidad_routes.js'
import { ColoniasRoutes } from './routesControllers/colonias_routes.js'
import { RecordsRoutes } from './routesControllers/records_routes.js'

CodigoPostalRoutes.prefix('api')
EstadoRoutes.prefix('api')
MunicipioRoutes.prefix('api')
LocalidadRoutes.prefix('api')
ColoniasRoutes.prefix('api')
RecordsRoutes.prefix('api')

router.get('/healthCheck', ({ response }) => response.ok('Server is alive!'))
