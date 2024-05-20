const LocalidadsController = () => import('#controllers/localidads_controller')
import router from '@adonisjs/core/services/router'

export const LocalidadRoutes = router
  .group(() => {
    router.get('/:municipioClave', [LocalidadsController, 'getLocalidad'])
  })
  .prefix('localidades')
