import { Controller, Get } from '@nestjs/common';

@Controller('api') // Group under /api
export class AppController {
  @Get('users') // Correct endpoint path
  getUsers() {
    return [{ id: 1, name: 'a' }];
  }
}
