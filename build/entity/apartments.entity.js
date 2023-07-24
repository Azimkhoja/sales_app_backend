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
exports.Apartments = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = require("./model.entity");
const buildings_entity_1 = require("./buildings.entity");
const price_entity_1 = require("./price.entity");
const sale_details_entity_1 = require("./sale_details.entity");
let Apartments = class Apartments extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.ManyToOne)((type) => buildings_entity_1.Buildings, (building) => building),
    (0, typeorm_1.JoinColumn)({ name: 'building_id' }),
    __metadata("design:type", Array)
], Apartments.prototype, "building_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Apartments.prototype, "rooms", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Apartments.prototype, "rooms_space", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => price_entity_1.Price, (price) => price.id),
    __metadata("design:type", Array)
], Apartments.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => sale_details_entity_1.Sale_details, (sales_details) => sales_details),
    __metadata("design:type", Array)
], Apartments.prototype, "sales_details", void 0);
Apartments = __decorate([
    (0, typeorm_1.Entity)('Apartments')
], Apartments);
exports.Apartments = Apartments;
//# sourceMappingURL=apartments.entity.js.map