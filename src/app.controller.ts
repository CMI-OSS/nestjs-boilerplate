import { Controller, Get, HttpCode } from '@nestjs/common';

/**
 * 메인 앱 컨트롤러
 */
@Controller()
export class AppController {
  @Get('/hello')
  @HttpCode(200)
  livenessCheck() {
    return 'hello-world';
  }
}
