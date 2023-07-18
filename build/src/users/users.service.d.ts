import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource } from 'typeorm';
export declare class UsersService {
    private dataSource;
    constructor(dataSource: DataSource);
    create(createUserDto: CreateUserDto): string;
    findAll(): Promise<string>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
