import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { CreatePriceDto } from 'src/dtos/price-dto/create-price.dto';
import { BuildingsService } from 'src/service/buildings.service';

@ApiTags('Buildings')
@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}


  @Post('') 
  addBuilding(@Body() createBuildingDto: CreateBuildingDto,  createApartmentDto?:CreateApartmentDto, createPriceDto?:CreatePriceDto) {
    return this.buildingsService.createBuilding(createBuildingDto, createApartmentDto, createPriceDto)
  }
}
