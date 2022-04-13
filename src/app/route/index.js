import Router from 'express'
import authNonRouter from './auth-non'
import v1Router from './v1'

//const Router = require('express').Router;
//const authNonRouter = require('./auth-non/index.js');

const router = Router();
//router.use('/auth-non', authNonRouter);
router.use('/v1', v1Router);
router.use('/auth-non', authNonRouter);

module.exports = router;
export default router;
