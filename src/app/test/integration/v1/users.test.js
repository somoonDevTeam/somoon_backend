import request from 'supertest'
import randomString from 'random-string'
import {
    uuid
} from '../../../util/uuid'
import models from '../../../model'
import { async } from 'regenerator-runtime'
import app from '../../../../app.js'
import userRepo from '../../../repository/user.repository.js' // 이유는 모르겠는데 레포지토리 .js 명시안하면 못 가져온다

let user

beforeAll(async () => {
    // 사용자 2명 생성
    await models.users.create({
        email: randomString() + '@test.com',
        password: randomString()
    })

    user = await models.users.create({
        email: randomString() + '@test.com',
        password: randomString()
    })
})

//afterAll(() => models.sequelize.close())

describe('GET: /v1/users', () => {

    test('전체 사용자 조회. | 200', async () => {
        let response = await request(app)
            .get(`/v1/users`)

        expect(response.body.length)
            .toBeGreaterThan(1)
    })

    test('uuid 로 사용자 조회. | 200', async () => {
        let response = await request(app)
          .get(`/v1/users/${user.uuid}`)
    
        expect(response.body.email)
          .toBe(user.email)
    })
    
    test('잘못된 uuid 로 사용자 조회. | 404', async () => {
        let response = await request(app)
          .get(`/v1/users/${uuid()}`)
    
        expect(response.statusCode)
          .toBe(404)
    })
})


describe('POST: /v1/users/join', () => {
    test('사용자 생성 | 200', async () => {
        let newEmail = randomString() + '@test.com'
        let newUser = {
            email: newEmail,
            password: randomString()
        }

        let response = await request(app)
          .post(`/v1/users`)
          .send({
              email: newUser.email,
              password: newUser.password
          })
        
        let checkUser = await userRepo.findByEmail(newEmail);

        expect(checkUser.email)
          .toBe(newEmail)
    })
})