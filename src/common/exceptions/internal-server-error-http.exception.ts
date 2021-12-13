import { BaseHttpException } from './base-http.exception';
import { HttpStatus } from '@nestjs/common';

/**
 * 서버 내부 오류 Http Exception
 * statusCode: 500
 */
export class InternalServerErrorHttpException extends BaseHttpException {
  /**
   * 생성자
   * @param path 발생 위치
   * @param message 메시지
   */
  constructor(path: string, message: string) {
    super(path, message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
