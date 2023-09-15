import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AuthGuard } from './user/guards/auth/auth.guard';

async function bootstrap() {
  //* start nest using Fastify
  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter(),
  // );

  /* LOGGER
  - 'log'
  - 'error'
  - 'warn'
  - 'debug'
  - 'verbose'
  */

  //* start nest using ExpressJS
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['warn', 'error'],
  });

  //* validation pipeline for validate incoming data
  app.useGlobalPipes(new ValidationPipe());

  //* morgan for logs
  app.use(morgan('dev'));

  //* user middleware as global
  // app.use(userAuth);

  app.useGlobalGuards(new AuthGuard());

  //* start nest server in port
  await app.listen(process.env.PORT);
}
bootstrap();
