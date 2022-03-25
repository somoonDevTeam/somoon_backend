// 환경변수 설정 가져오기
require('dotenv').config()

// 현재 실행환경이 실행중인 환경이 아닌경우 바벨에 등록을 해준다? 코드분석 필요
// process -> 노드의 객체

if (process.env.NODE_ENV !== 'production') {
    require('@babel/register')
  }

const baseDbSetting = {
   // 기본이 되는 db세팅. 모두 똑같이 맞춰준다.
   host: process.env.DB_HOST,
   username: process.env.DB_USER,
   password: process.env.DB_PW,
   dialect: 'mariadb',
   pool: {
       max: 5,
       min: 0,
       acquire: 30000,
       idle: 10000
   }
};

module.exports = {
    // production(운영), development, test 총 세가지 환경으로 나누어줌
    // logging: false, console.log()(true), (...msg) => console.log(msg)
    production: Object.assign({
        database: process.env.DB_NAME,
        logging: false
    }, baseDbSetting),

    development: Object.assign({
        database: process.env.DB_DEV,
        logging: true
    }, baseDbSetting),

    test: Object.assign({
        database: process.env.DB_TEST,
        logging: false
    }, baseDbSetting)
}