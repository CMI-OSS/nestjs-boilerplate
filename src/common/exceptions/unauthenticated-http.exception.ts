import * as _ from 'lodash';
import { HttpStatus } from '@nestjs/common';
import { BaseHttpException } from '@/common/exceptions/base-http.exception';

/**
 * 인증 실패 Http Exception
 * statusCode: 401
 */
export class UnauthenticatedHttpException extends BaseHttpException {
  /**
   * 사용자 인덱스
   */
  userId: number;

  /**
   * 생성자
   * @param path 발생 위치
   * @param message 메시지
   * @param userId 사용자 인덱스
   */
  constructor(path: string, message: string, userId?: number) {
    super(path, message, HttpStatus.UNAUTHORIZED);
    this.userId = userId;
  }
}

/**
 * 인증 정보가 잘못 된 경우 Http Exception
 * statusCode: 401
 */
export class InvalidAuthInfoException extends UnauthenticatedHttpException {
  /**
   * 생성자
   * @param path 발생 위치
   * @param authInfo 인증 정보
   * @param userId 사용자 인덱스
   */
  constructor(path: string, authInfo: string, userId?: number) {
    super(path, `${authInfo} is not valid`, userId);
  }
}

/**
 * 이메일 인증 Http Exception
 * statusCode: 401
 */
export class InvalidEmailAuthInfoException extends InvalidAuthInfoException {
  /**
   * 생성자
   * @param path 발생 위치
   * @param userId 사용자 인덱스
   */
  constructor(path: string, userId?: number) {
    super(path, 'Email or Password', userId);
  }
}

/**
 * 인증 제공자(Apple, Facebook, Google) 인증 Http Exception
 * statusCode: 401
 */
export class InvalidProviderAuthInfoException extends InvalidAuthInfoException {
  /**
   * 생성자
   * @param path 발생 위치
   * @param provider 인증 제공자 (Apple, Facebook, Google)
   * @param userId 사용자 인덱스
   */
  constructor(path: string, provider: string, userId?: number) {
    super(path, `${_.upperFirst(provider)} token`, userId);
  }
}

/**
 * 인증 정보가 만료 된 경우 Http Exception
 * statusCode: 401
 */
export class ExpiredAuthInfoException extends UnauthenticatedHttpException {
  /**
   * 생성자
   * @param path 발생 위치
   * @param authInfo 인증 정보
   * @param userId 사용자 인덱스
   */
  constructor(path: string, authInfo: string, userId?: number) {
    super(path, `${authInfo} is expired`, userId);
  }
}
