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
let BuildingsService = class BuildingsService {
    constructor(buildingRepository) {
        this.buildingRepository = buildingRepository;
    }
    async createBuilding(createBuildingDto) {
        let buildings = [];
        let range = createBuildingDto.floor_number *
            createBuildingDto.apartment_number *
            createBuildingDto.entrance_number;
        for (let room = 1; room <= range; room++) {
            buildings.push({
                name: 'Bino1',
                entrance_number: 2,
                floor_number: 1,
                apartment_number: room,
                res_town_id: 6,
            });
        }
        await this.buildingRepository.save(buildings);
        console.log(buildings);
    }
};
BuildingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(buildings_entity_1.Buildings)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BuildingsService);
exports.BuildingsService = BuildingsService;
//# sourceMappingURL=buildings.service.js.map