import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { CreatePriceDto } from 'src/dtos/price-dto/create-price.dto';
import { BuildingsService } from 'src/service/buildings.service';
export declare class BuildingsController {
    private readonly buildingsService;
    constructor(buildingsService: BuildingsService);
    addBuilding(createBuildingDto: CreateBuildingDto, createApartmentDto?: CreateApartmentDto, createPriceDto?: CreatePriceDto): Promise<void>;
}
