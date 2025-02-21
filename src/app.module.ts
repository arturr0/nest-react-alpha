import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { AppController } from './app.controller'; // Make sure this path is correct

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'myreact', 'build'),
      serveRoot: '/', // Serve React build at the root
      exclude: ['/api*'], // Make sure API routes work
    }),
  ],
  // Register AppController in the controllers array
  controllers: [AppController], 
})
export class AppModule {}
