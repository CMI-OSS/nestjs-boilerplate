import { HttpException, HttpStatus, Logger } from '@nestjs/common';

/**
 * 기본 Http Exception
 */
export class BaseHttpException extends HttpException {
  /**
   * 생성자
   * @param path 발생 위치
   * @param message 메시지
   * @param statusCode 상태코드
   */
  constructor(path: string, message: string, statusCode: HttpStatus) {
    Logger.error(`[${path}] ${message}`);
    super(message, statusCode);
  }
}
