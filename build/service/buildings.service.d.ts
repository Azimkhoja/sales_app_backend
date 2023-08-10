import { Repository } from 'typeorm';
import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { Buildings } from 'src/entity/buildings.entity';
export declare class BuildingsService {
    private readonly buildingRepository;
    constructor(buildingRepository: Repository<Buildings>);
    createBuilding(createBuildingDto: CreateBuildingDto): Promise<void>;
}
