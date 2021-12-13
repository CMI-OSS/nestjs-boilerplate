import { HttpException } from '@nestjs/common';
import {
  UnauthenticatedHttpException,
  InvalidAuthInfoException,
} from '@/common/exceptions/unauthenticated-http.exception';
import { UnauthorizedHttpException } from '@/common/exceptions/unauthorized-http.exception';
import { AccountAlreadyExistsHttpException, ConflictHttpException } from '@/common/exceptions/conflict-http.exception';

/**
 * Auth Exception에 대한 Http 에러 코드 생성
 * @param exception
 */
const getErrorCodeAuth = (exception: UnauthenticatedHttpException | UnauthorizedHttpException): string => {
  const codePrefix = 'AUTH_';
  let code = 'UNKNOWN';

  if (exception instanceof InvalidAuthInfoException) {
    code = '0000';
  } else if (exception instanceof UnauthorizedHttpException) {
    code = '0001';
  }

  return `${codePrefix}${code}`;
};

/**
 * Conflict Exception 에 대한 Http 에러 코드 생성
 * @param exception
 */
const getErrorCodeConflict = (exception: ConflictHttpException): string => {
  const codePrefix = 'CONFLICT_';
  let code = 'UNKNOWN';

  if (exception instanceof AccountAlreadyExistsHttpException) {
    code = '0000';
  }

  return `${codePrefix}${code}`;
};

/**
 * Exception 종류에 따른 Http 에러 코드 생성
 * @param exception
 */
export const getHttpErrorCode = (exception: HttpException): string => {
  const codePrefix = 'AE_';
  let code = 'UNKNOWN';

  if (exception instanceof UnauthenticatedHttpException || exception instanceof UnauthorizedHttpException) {
    code = getErrorCodeAuth(exception);
  } else if (exception instanceof ConflictHttpException) {
    code = getErrorCodeConflict(exception);
  }

  return `${codePrefix}${code}`;
};
