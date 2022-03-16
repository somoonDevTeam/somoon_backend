import express from 'express'
import {
    login,
    tokenTest
} from '../../controller/v1/auth.controller'

const router = express.Router()

router.route('/login')
    .post(
        login
    )

router.route('/tokenTest')
    .get(
        tokenTest
    )

export default router