import { DataSource, Repository } from 'typeorm';
import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { CreatePriceDto } from 'src/dtos/price-dto/create-price.dto';
import { Buildings } from 'src/entity/buildings.entity';
import { Apartments } from 'src/entity/apartments.entity';
export declare class BuildingsService {
    private readonly apartmentRepo;
    private readonly buildingRepository;
    private readonly dataSource;
    constructor(apartmentRepo: Repository<Apartments>, buildingRepository: Repository<Buildings>, dataSource: DataSource);
    createBuilding(createBuildingDto: CreateBuildingDto, createApartmentDto: CreateApartmentDto, createPriceDto: CreatePriceDto): Promise<void>;
}
