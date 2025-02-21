import { AppController } from './app.controller'; // Make sure this path is correct
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(), // Add this to initialize the config service
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'myreact', 'build'),
      serveRoot: '/', // Serve React build at the root
      exclude: ['/api*'], // Make sure API routes work
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
