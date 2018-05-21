import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarMiddleware } from './bar/bar.middleware';
import { FooMiddleware } from './foo/foo.middleware';
import { JwtMiddleware } from './jwt/jwt.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ AppService ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes(AppController);
    consumer.apply(FooMiddleware).forRoutes('/home');
    consumer.apply(BarMiddleware).forRoutes('/api/home')
  }
}
