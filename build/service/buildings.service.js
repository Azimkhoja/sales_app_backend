"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const buildings_entity_1 = require("../entity/buildings.entity");
const typeorm_2 = require("@nestjs/typeorm");
const apartments_entity_1 = require("../entity/apartments.entity");
const price_entity_1 = require("../entity/price.entity");
let BuildingsService = class BuildingsService {
    constructor(apartmentRepo, buildingRepository, dataSource) {
        this.apartmentRepo = apartmentRepo;
        this.buildingRepository = buildingRepository;
        this.dataSource = dataSource;
    }
    async createBuilding(createBuildingDto, createApartmentDto, createPriceDto) {
        let apartment;
        const building = await this.buildingRepository
            .save(createBuildingDto)
            .then((data) => {
            apartment = this.buildingRepository.manager
                .getRepository(apartments_entity_1.Apartments)
                .insert({ building_id: data })
                .then((data) => {
                return apartment.then((value) => {
                    this.apartmentRepo.manager.getRepository(price_entity_1.Price).insert({});
                });
            });
        });
        return building;
    }
};
BuildingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(apartments_entity_1.Apartments)),
    __param(1, (0, typeorm_2.InjectRepository)(buildings_entity_1.Buildings)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.DataSource])
], BuildingsService);
exports.BuildingsService = BuildingsService;
//# sourceMappingURL=buildings.service.js.map