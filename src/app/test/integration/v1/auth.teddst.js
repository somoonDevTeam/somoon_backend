require('dotenv').config()

import request from 'supertest'
import randomString from 'random-string'
import jwt from 'jsonwebtoken'
import models from '../../../model'
import userRepo from '../../../repository/user.repository.js' // 이유는 모르겠는데 레포지토리 .js 명시안하면 못 가져온다
import app from '../../../../app.js' // app 디렉터리, app.js 파일 둘 다 있기 때문에 .js를 명시 해주었음

// 이 부분 주석 풀면 뭐 데이터를 가져오기 전에 연결이 종료된다고 뜬다.. afterAll이 뭔지 좀 더 알아봐야겠다.
// afterAll(() => models.sequelize.close())

describe('로그인 테스트', () => {

    let userData;
    let token;

    beforeAll(async () => {
        userData = {
            email: randomString() + '@test.com',
            password: randomString()
        }

        // 테스트용 사용자 생성
        await userRepo.store(userData)
    })

    test('실제 로그인 테스트. | 200', async () => {
        let response = await request(app)
        .post('/v1/auth/login')
        .send({
            email: userData.email,
            password: userData.password
        })

        expect(response.statusCode)
            .toBe(200)
        expect(response.body.data.token)
            .toBeTruthy()
        
        const payload = jwt.verify(response.body.data.token, process.env.JWT_SECRET)
        expect(userData.email).toBe(payload.email)

        const user = await userRepo.find(payload.uuid)
        expect(userData.email).toBe(user.email)

        token = response.body.data.token
    })


    test('없는 사용자로 로그인. | 404', async () => {
        let response = await request(app)
        .post('/v1/auth/login')
        .send({
            email: 'notfound@email.com',
            password: 'somePassword'
        })

        expect(response.statusCode)
            .toBe(404)
        expect(response.body.message)
            .toBe('사용자를 찾을 수 없습니다.')
    })

    test('잘못된 비밀번호로 로그인. | 404', async () => {
        let response = await request(app)
            .post('/v1/auth/login')
            .send({
                email:userData.email,
                password: 'wrongPassword'
            })

        expect(response.statusCode)
            .toBe(422)
        expect(response.body.message)
            .toBe('비밀번호를 확인 해주세요.')
    })

    test('token 으로 사용자 조회. | 200', async () => {
        let response = await request(app)
            .get('/v1/auth/tokenTest')
            .set('Authorization', `Bearer ${token}`)
        
        expect(response.body.data.email).toBe(userData.email)

        console.log(response.body.data)
    })
})