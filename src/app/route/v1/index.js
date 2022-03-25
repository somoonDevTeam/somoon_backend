import fs from 'fs'
import path from 'path'
import express from 'express'

const router = express.Router()
const indexJs = path.basename(__filename)
import authNonRouter from './auth-non'

// 라우터 파일을 찾아서 라우터로 사용한다
// ex) user.route.js -> router.use(`/user`, require(`./user.router.js`).default)

router.use('/auth-non', authNonRouter);
fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== indexJs) && (file.slice(-9) === '.route.js'))
  .forEach(routeFile => router.use(`/${routeFile.split('.')[0]}`, require(`./${routeFile}`).default))

export default router