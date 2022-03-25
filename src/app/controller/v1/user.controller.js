import httpStatus from 'http-status'
import createError from 'http-errors'
import userRepo from '../../repository/user.repository'

const get = async (req, res, next) => {
  try {
    if (req.params.uuid){
      const user = await userRepo.find(req.params.uuid)

      if (!user){
        throw (createError(httpStatus.NOT_FOUND, '사용자를 찾을 수 없습니다.'))
      }

      return res
        .status(httpStatus.OK)
        .json(user.toWeb())
    } else {
      const users = await userRepo.all()

      return res.json(users.map(user => user.toWeb()))
    }
  } catch (e) {
    next(e)
  }
}

const join = async (req, res, next) => {
  try{
    // request로 부터 입력정보 받아오기
    const { email, password, nickname } = req.body;

    const userData = {
      email : email,
      password : password,
      nickname : nickname
    }
    userData.site_id = req.body.site_id;
    /*
      site_id, password, name, email, address, phone, 
      nickname, sns_id, sns_type, birthday, gender, profile_imgreq.body;
    */

    // 유효성검사 - email, password 입력 여부 및 데이터 유효성, 이메일 중복검사 등
    /***********
    code
    개발 필요
    1. 여기서 작성
    2. middleware로 만들어서 라우터에 넣기
    3. middleware로 만들어서 레포지토리에 넣기
    어떻게 해야하지?
    우선 프론트에서 먼저 유효성 검사 하도록 처리
    ************/

    // 사용자 생성
    await userRepo.store(userData)

      return res
        .status(httpStatus.OK)
        .json()
    } catch (e) {
        next(e)
    }
  }

export {
  get, join
}