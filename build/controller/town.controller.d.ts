import { CreateTownDto } from 'src/dtos/town-dto/create-town.dto';
import { TownService } from 'src/service/town.service';
export declare class TownController {
    private readonly townService;
    constructor(townService: TownService);
    createTown(createTownDto: CreateTownDto): Promise<{
        status: number;
        data: CreateTownDto & import("../entity/town.entity").Towns;
        message: string;
    }>;
}
