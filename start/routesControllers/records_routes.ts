const RecordsController = () => import('#controllers/records_controller')
import router from '@adonisjs/core/services/router'

export const RecordsRoutes = router
  .group(() => {
    router.get('/', [RecordsController, 'getAll'])
    router.post('/', [RecordsController, 'createRecord'])
    router.put('/:id', [RecordsController, 'editRecord'])
    router.delete('/:id', [RecordsController, 'deleteRecord'])
  })
  .prefix('records')
