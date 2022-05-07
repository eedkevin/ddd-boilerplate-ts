import { Router } from 'express'
import { cloneOrder } from './handler'
import { authMiddleware } from '../account'

const router = Router()

router.use(authMiddleware)
router.post('/clone', cloneOrder)

export default router
