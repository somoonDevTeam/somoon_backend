import request from 'supertest'
import randomString from 'random-string'
import {
    uuid
} from '../../../util/uuid'
import models from '../../../model'
import { async } from 'regenerator-runtime'
import app from '../../../../app.js'

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

describe('GET: v1/users', () => {

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