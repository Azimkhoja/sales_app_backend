"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const buildings_controller_1 = require("../../controller/buildings.controller");
const apartments_entity_1 = require("../../entity/apartments.entity");
const buildings_entity_1 = require("../../entity/buildings.entity");
const buildings_service_1 = require("../../service/buildings.service");
let BuildingsModule = class BuildingsModule {
};
BuildingsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([buildings_entity_1.Buildings, apartments_entity_1.Apartments]),],
        controllers: [buildings_controller_1.BuildingsController],
        providers: [buildings_service_1.BuildingsService],
        exports: [typeorm_1.TypeOrmModule],
    })
], BuildingsModule);
exports.BuildingsModule = BuildingsModule;
//# sourceMappingURL=buildings.module.js.map