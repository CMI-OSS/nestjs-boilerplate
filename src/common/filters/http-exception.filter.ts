import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { getHttpErrorCode } from '@/src/common/util/http-error-code.util';

/**
 * Exception 필터
 *
 * Exception 발생 시 통일 된 포맷으로 반환 시킴
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  /**
   * Exception 포맷 적용
   * @param exception
   * @param host
   */
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      success: false,
      error: {
        code: getHttpErrorCode(exception),
        message: exception.message,
      },
    });
  }
}
