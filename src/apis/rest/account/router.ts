import { Router } from 'express'
import { login } from './handler'

const router = Router()

router.post('/login', login)

export default router
