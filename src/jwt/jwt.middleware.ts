import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  resolve(context: string): any {
    return (req, res, next) => {
      req.jwt = 'Hit!';
      next();
    };
  }
}
