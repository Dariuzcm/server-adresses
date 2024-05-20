const EstadosController = () => import('#controllers/estados_controller')
import router from '@adonisjs/core/services/router'

export const EstadoRoutes = router
  .group(() => {
    router.get('/', [EstadosController, 'getAllEstados'])
  })
  .prefix('estados')
