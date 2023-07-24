import { Controller } from '@nestjs/common';
import { UserRolesService } from 'src/service/user-roles.service';

@Controller('user-roles')
export class UserRolesController {
  constructor(private readonly userRolesService: UserRolesService) {}
}
