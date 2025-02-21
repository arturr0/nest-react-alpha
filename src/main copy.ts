import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Manually serve static files
  app.use('/static', express.static(path.join(__dirname, '..', 'myreact', 'build', 'static')));

  await app.listen(5000);
}
bootstrap();
