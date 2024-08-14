import { StatusCodes } from "http-status-codes";

export const status = {
  // success
  SUCCESS: {
    status: StatusCodes.OK,
    isSuccess: true,
    code: 2000,
    message: "SUCCESS!",
  },

  // error
  // common err
  INTERNAL_SERVER_ERROR: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    isSuccess: false,
    code: "COMMON000",
    message: "서버 에러, 관리자에게 문의 바랍니다.",
  },
  BAD_REQUEST: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "COMMON001",
    message: "잘못된 요청입니다.",
  },
  UNAUTHORIZED: {
    status: StatusCodes.UNAUTHORIZED,
    isSuccess: false,
    code: "COMMON002",
    message: "권한이 잘못되었습니다.",
  },
  METHOD_NOT_ALLOWED: {
    status: StatusCodes.METHOD_NOT_ALLOWED,
    isSuccess: false,
    code: "COMMON003",
    message: "지원하지 않는 Http Method 입니다.",
  },
  FORBIDDEN: {
    status: StatusCodes.FORBIDDEN,
    isSuccess: false,
    code: "COMMON004",
    message: "금지된 요청입니다.",
  },

  // post err
  POST_NOT_FOUND: {
    status: StatusCodes.NOT_FOUND,
    isSuccess: false,
    code: "POST4001",
    message: "게시글이 없습니다.",
  },

  // more local err
  LETTER_NOT_EXIST: {
    status: StatusCodes.BAD_REQUEST, 
    "isSuccess": false, 
    "code": "LETTER4001", 
    "message": "존재하지 않는 로컬레터입니다."
  },
  EVENT_NOT_EXIST: {
    status: StatusCodes.BAD_REQUEST, 
    "isSuccess": false,
    "code": "EVENT4001", 
    "message": "존재하지 않는 이벤트입니다."
  },

  // brand err
   BRAND_NOT_EXIST: {
     status: StatusCodes.BAD_REQUEST, 
     "isSuccess": false, 
     "code": "BRAND4001", 
     "message": "존재하지 않는 브랜드입니다."
   },
  PAGE_PARAMETER_NOT_EXIST: {
    status: StatusCodes.BAD_REQUEST, 
    "isSuccess": false, 
    "code": "BRAND4002", 
    "message": "페이지 파라미터를 입력해야 합니다."
  },   
  USER_IS_NOT_CREATOR: {
    status: StatusCodes.BAD_REQUEST, 
    "isSuccess": false, 
    "code": "BRAND4003", 
    "message": "크리에이터가 아닌 일반 유저입니다."
  },


  // comment err
  COMMENT_NOT_FOUND:{
    status: StatusCodes.NOT_FOUND,
    isSuccess: false,
    code: "COMMENT4001",
    message:"댓글이 없습니다."
  },


  // user
  USER_NOT_EXISTS: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4001",
    message: "존재하지 않는 회원입니다.",
  },
  LOGINID_NOT_EXISTS: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4002",
    message: "가입되지 않은 아이디입니다.",
  },
  EMAIL_NOT_EXISTS: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4003",
    message: "가입되지 않은 이메일입니다.",
  },
  PASSWORD_NOT_MATCHED: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4004",
    message: "비밀번호가 일치하지 않습니다.",
  },

  TOKEN_UPDATE_FAILED: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4005",
    message: "토큰 저장에 실패했습니다.",
  },
  TOKEN_NOT_EXISTS: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4006",
    message: "토큰이 존재하지 않습니다.",
  },
  TOKEN_UNAUTHORIZED: {
    status: StatusCodes.UNAUTHORIZED,
    isSuccess: false,
    code: "USER4007",
    message: "유효하지 않은 로그인 토큰입니다.",
  },
  FORBIDDEN_APPOROACH: {
    status: StatusCodes.FORBIDDEN,
    isSuccess: false,
    code: "USER4008",
    message: "로그인한 유저만 사용할 수 있는 서비스입니다.",
  },
  ACCOUNT_CANCELED: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "USER4009",
    message: "계정 탈퇴를 신청한 사용자입니다.",
  },
  LOGINID_ALREADY_EXISTS: {
    status: StatusCodes.BAD_REQUEST,  // 409
    isSuccess: false,
    code: "USER4010",
    message: "이미 존재하는 로그인 ID입니다.",
  },
  EMAIL_ALREADY_EXISTS: {
    status: StatusCodes.CONFLICT,  // 409
    isSuccess: false,
    code: "USER4011",
    message: "이미 존재하는 이메일입니다.",
  },
  NICKNAME_ALREADY_EXISTS: {
    status: StatusCodes.CONFLICT,  // 409
    isSuccess: false,
    code: "USER4012",
    message: "이미 존재하는 닉네임입니다.",
  },
  EMAIL_SENDING_FAILED: {
    status: StatusCodes.SERVICE_UNAVAILABLE,  // 503
    isSuccess: false,
    code: "USER4013",
    message: "이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
  },

  //review
  REVIEW_NOT_EXISTS: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "REVIEW4001",
    message: "존재하지 않는 리뷰입니다.",
  },

  //cart
  CART_ITEM_NOT_EXISTS: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "CARTITEM4001",
    message: "존재하지 않는 장바구니 상품입니다.",
  },

  // socket error
  CONNECT_IS_WRONG: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    isSuccess: false,
    code: "SOCKET5001"
  },
  // db error
  PARAMETER_IS_WRONG: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: "DATABASE4001",
    message:
      "쿼리 실행 시 전달되는 파라미터가 잘못되었습니다. 파라미터 개수 혹은 파라미터 형식을 확인해주세요.",
  },

  
  // gallery err
  REGION_NOT_EXIST: {
    status: StatusCodes.BAD_REQUEST, 
    "isSuccess": false, 
    "code": "GALLERY4001", 
    "message": "존재하지 않는 지역입니다."
  },
  CATEGORY_NOT_EXIST: {
    status: StatusCodes.BAD_REQUEST, 
    "isSuccess": false, 
    "code": "GALLERY4002", 
    "message": "존재하지 않는 카테고리입니다."
  },
  PRODUCT_NOT_EXIST: {
    status: StatusCodes.BAD_REQUEST, 
    "isSuccess": false, 
    "code": "GALLERY4003", 
    "message": "존재하지 않는 제품입니다."
  },
};

