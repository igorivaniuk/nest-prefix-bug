import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class BarMiddleware implements NestMiddleware {
  resolve(context: string): any {
    return (req, res, next) => {
      req.bar = 'Hit!';
      next();
    };
  }
}
