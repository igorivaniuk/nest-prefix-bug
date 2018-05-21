import { Controller, Get, Req } from '@nestjs/common';

@Controller('home')
export class AppController {
  constructor() {}

  @Get()
  root(@Req() req: any): any {
    return {
      foo: req.foo,
      bar: req.bar,
      jwt: req.jwt,
    };
  }
}
