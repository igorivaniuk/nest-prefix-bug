import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class FooMiddleware implements NestMiddleware {
  resolve(context: string): any {
    return (req, res, next) => {
      req.foo = 'Hit!';
      next();
    };
  }
}
