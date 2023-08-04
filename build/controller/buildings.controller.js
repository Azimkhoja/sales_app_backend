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
exports.BuildingsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_apartment_dto_1 = require("../dtos/apartment-dto/create-apartment.dto");
const create_building_dto_1 = require("../dtos/building-dto/create-building.dto");
const create_price_dto_1 = require("../dtos/price-dto/create-price.dto");
const buildings_service_1 = require("../service/buildings.service");
let BuildingsController = class BuildingsController {
    constructor(buildingsService) {
        this.buildingsService = buildingsService;
    }
    addBuilding(createBuildingDto, createApartmentDto, createPriceDto) {
        return this.buildingsService.createBuilding(createBuildingDto, createApartmentDto, createPriceDto);
    }
};
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_building_dto_1.CreateBuildingDto, create_apartment_dto_1.CreateApartmentDto, create_price_dto_1.CreatePriceDto]),
    __metadata("design:returntype", void 0)
], BuildingsController.prototype, "addBuilding", null);
BuildingsController = __decorate([
    (0, swagger_1.ApiTags)('Buildings'),
    (0, common_1.Controller)('buildings'),
    __metadata("design:paramtypes", [buildings_service_1.BuildingsService])
], BuildingsController);
exports.BuildingsController = BuildingsController;
//# sourceMappingURL=buildings.controller.js.map