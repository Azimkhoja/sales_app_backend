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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buildings = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = require("./model.entity");
const apartments_entity_1 = require("./apartments.entity");
let Buildings = class Buildings extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Buildings.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Buildings.prototype, "building_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Buildings.prototype, "entrance_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Buildings.prototype, "floor_number", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => apartments_entity_1.Apartments, (apartment) => apartment.building_id),
    __metadata("design:type", apartments_entity_1.Apartments)
], Buildings.prototype, "apartments", void 0);
Buildings = __decorate([
    (0, typeorm_1.Entity)('Buildings')
], Buildings);
exports.Buildings = Buildings;
//# sourceMappingURL=buildings.entity.js.map