import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'; // Import ConfigService
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Inject ConfigService
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 5000;

  app.enableCors({
    origin: 'https://your-react-app.onrender.com', // Replace with your React app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  app.use('/static', express.static(path.join(__dirname, '..', 'myreact', 'build', 'static')));

  await app.listen(port);
}
bootstrap();
