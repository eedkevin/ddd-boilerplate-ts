import { Router } from 'express'
import orderRouter from './order'
import accountRouter from './account'

const router = Router()
router.use('/account', accountRouter)
router.use('/order', orderRouter)

export default router
