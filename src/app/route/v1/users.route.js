import express from 'express'
import {get, join} from '../../controller/v1/user.controller'

const router = express.Router()

router.get('/', get)
router.get('/:uuid?', get)
router.post('/join', join)

export default router