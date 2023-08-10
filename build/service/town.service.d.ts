import { CreateTownDto } from 'src/dtos/town-dto/create-town.dto';
import { Towns } from 'src/entity/town.entity';
import { Repository } from 'typeorm';
export declare class TownService {
    private readonly townRepository;
    constructor(townRepository: Repository<Towns>);
    create(createTownDto: CreateTownDto): Promise<{
        status: number;
        data: CreateTownDto & Towns;
        message: string;
    }>;
}
