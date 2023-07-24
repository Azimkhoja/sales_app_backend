import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/service/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.getUsers();
  }
}
