import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { BuildingsService } from 'src/service/buildings.service';
export declare class BuildingsController {
    private readonly buildingsService;
    constructor(buildingsService: BuildingsService);
    addBuilding(createBuildingDto: CreateBuildingDto): Promise<void>;
}
