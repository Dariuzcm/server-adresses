const MunicipiosController = () => import('#controllers/municipios_controller')
import router from '@adonisjs/core/services/router'

export const MunicipioRoutes = router
  .group(() => {
    router.get('/:estadoClave', [MunicipiosController, 'getMunicipio'])
  })
  .prefix('municipios')
