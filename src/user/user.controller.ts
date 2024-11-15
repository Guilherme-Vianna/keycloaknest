import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getpublic(): string {
    return `from public`;
  }
  @Get('/user')
  getUser(): string {
    return `from user`;
  }
  @Get('/admin')
  getAdmin(): string {
    return `from admin`;
  }
  @Get('/all')
  getAll(): string {
    return `from all`;
  }
}
