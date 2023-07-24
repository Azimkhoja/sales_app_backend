import { Users } from 'src/entity/users.entity';
import { DataSource } from 'typeorm';
export declare class UsersService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    getUsers(): Promise<{
        message: string;
        data: Users[];
    }>;
}
