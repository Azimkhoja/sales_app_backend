import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { CreatePriceDto } from 'src/dtos/price-dto/create-price.dto';
import { Buildings } from 'src/entity/buildings.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartments } from 'src/entity/apartments.entity';
import { Price } from 'src/entity/price.entity';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Apartments)
    private readonly apartmentRepo: Repository<Apartments>,
    @InjectRepository(Buildings)
    private readonly buildingRepository: Repository<Buildings>,
    private readonly dataSource: DataSource,
  ) {}

  async createBuilding(
    createBuildingDto: CreateBuildingDto,
    createApartmentDto: CreateApartmentDto,
    createPriceDto: CreatePriceDto,
  ) {
    let apartment;
    const building = await this.buildingRepository
      .save(createBuildingDto)
      .then((data) => {
        apartment = this.buildingRepository.manager
          .getRepository(Apartments)
          .insert({ building_id: data })
          .then((data) => {
            return apartment.then((value) => {
                this.apartmentRepo.manager.getRepository(Price).insert({})
            })
          });
      });
    // const apartmentRepository = this.dataSource.getRepository(Apartments);
    // const apartment = apartmentRepository.insert({ building_id: building.id });

    return building;
  }
}

// https://github.com/A-EXPRESS-UZ/A_EXPRESS_ORG_BACKEND.git
