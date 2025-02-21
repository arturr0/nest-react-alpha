import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'https://your-react-app.onrender.com', // Replace with your React app's URL on Render
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  app.use('/static', express.static(path.join(__dirname, '..', 'myreact', 'build', 'static')));

  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 5000;

  await app.listen(port);
}
bootstrap();
