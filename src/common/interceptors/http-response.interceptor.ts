import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * 기본 적인 Response 형태
 */
export interface Response<T> {
  /**
   * 결과 데이터
   */
  data: T;
}

/**
 * Http Response 인터셉터
 *
 * Http Response를 가로채서 통일 된 포맷을 적용 시킴
 */
@Injectable()
export class HttpResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  /**
   * Response에 포맷을 적용
   * @param context
   * @param next
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest();
    const requestUrl = request.path;
    const excludePaths = ['/jwk', '/jwks']; // Response 포맷 적용을 제외 할 경로

    let response;
    if (!excludePaths.some(url => requestUrl.includes(url))) {
      // 포맷 적용
      response = data => ({
        success: true,
        data,
      });
    } else {
      // 포맷 적용 안함
      response = data => data;
    }

    return next.handle().pipe(map(response));
  }
}
