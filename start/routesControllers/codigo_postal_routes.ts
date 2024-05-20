const CodigoPostalsController = () => import('#controllers/codigo_postals_controller')
import router from '@adonisjs/core/services/router'

const CodigoPostalRoutes = router
  .group(() => {
    router.get('/', ({ response }) => response.ok('codigoPostal'))
    router.get('/:codigo_postal', [CodigoPostalsController, 'getObjectByCodigoPostal'])
  })
  .prefix('cp')

export default CodigoPostalRoutes
