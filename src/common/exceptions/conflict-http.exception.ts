import { BaseHttpException } from './base-http.exception';
import { HttpStatus } from '@nestjs/common';

/**
 * 데이터 충돌 Http Exception
 * statusCode: 409
 */
export class ConflictHttpException extends BaseHttpException {
  /**
   * 생성자
   * @param path 발생 위치
   * @param message 메시지
   */
  constructor(path: string, message: string) {
    super(path, message, HttpStatus.CONFLICT);
  }
}

/**
 * 이미 존재하는 경우 발생하는 Exception
 */
export class AlreadyExistsHttpException extends ConflictHttpException {
  /**
   * 생성자
   * @param path 발생 위치
   * @param entity 충돌 발생하는 객체
   * @param key 충돌 발생하는 키
   * @param value 충돌 발생하는 값
   */
  constructor(path: string, entity: string, key: string, value: string) {
    super(path, `${entity} with ${key} '${value}' is already exists.`); // 409
  }
}

/**
 * 계정이 이미 존재하는 경우 발생하는 Exception
 */
export class AccountAlreadyExistsHttpException extends AlreadyExistsHttpException {
  /**
   * 생성자
   * @param path 발생 위치
   * @param email 이메일
   */
  constructor(path, email) {
    super(path, 'Account', 'email', email);
  }
}
