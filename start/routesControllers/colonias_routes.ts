const ColoniasController = () => import('#controllers/colonias_controller')
import router from '@adonisjs/core/services/router'

export const ColoniasRoutes = router
  .group(() => {
    router.post('/', [ColoniasController, 'getColonias'])
  })
  .prefix('colonias')
