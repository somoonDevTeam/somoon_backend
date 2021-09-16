// node_modules 에 있는 express 관련 파일을 가져온다.
const express = require('express')
// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express()
const port = 3000
// 위와 같이 express와 app을 변수로 사용한다.
app.get('/', (req, res) => { // get 메소드 일때,
  res.send('Hello World!')  //  응답 보내기
})
// 지정한 포트로 서버 오픈
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})