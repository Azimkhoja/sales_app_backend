import { UsersService } from 'src/service/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<{
        message: string;
        data: import("../entity/users.entity").Users[];
    }>;
}
