import randomString from 'random-string'
import {
    uuid
  } from '../../util/uuid'
/*import {
  defalut
} from '../../model/index.js'*/
const model = require('../../model/index.js')

afterAll(() => model.sequelize.close())

  test('ordered UUID 가 출력되어야 합니다.', () => {
    const orderedUuid = uuid()
  
    expect(orderedUuid)
    .toMatch(/\b4[0-9A-Fa-f]{31}\b/g)
  })

  test('사용자를 생성하면 uuid가 정상 생성 되어야 합니다.', async () => {
    const user = await model[user].create({
      email: `${randomString()}@test.com`,
      password: randomString()
    })

    expect(user.uuid)
    .toMatch(/\b4[0-9A-Fa-f]{31}\b/g)
  })