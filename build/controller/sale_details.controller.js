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
exports.SaleDetailsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sale_details_service_1 = require("../service/sale_details.service");
let SaleDetailsController = class SaleDetailsController {
    constructor(saleDetailsService) {
        this.saleDetailsService = saleDetailsService;
    }
};
SaleDetailsController = __decorate([
    (0, swagger_1.ApiTags)('SalesDetails'),
    (0, common_1.Controller)('sale-details'),
    __metadata("design:paramtypes", [sale_details_service_1.SaleDetailsService])
], SaleDetailsController);
exports.SaleDetailsController = SaleDetailsController;
//# sourceMappingURL=sale_details.controller.js.map