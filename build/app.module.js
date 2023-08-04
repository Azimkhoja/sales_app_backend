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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const users_controller_1 = require("./controller/users.controller");
const clients_controller_1 = require("./controller/clients.controller");
const apartments_controller_1 = require("./controller/apartments.controller");
const buildings_controller_1 = require("./controller/buildings.controller");
const roles_controller_1 = require("./controller/roles.controller");
const price_controller_1 = require("./controller/price.controller");
const sales_controller_1 = require("./controller/sales.controller");
const payment_details_controller_1 = require("./controller/payment_details.controller");
const payment_methods_controller_1 = require("./controller/payment_methods.controller");
const sale_details_controller_1 = require("./controller/sale_details.controller");
const user_roles_controller_1 = require("./controller/user_roles.controller");
const users_service_1 = require("./service/users.service");
const clients_service_1 = require("./service/clients.service");
const buildings_service_1 = require("./service/buildings.service");
const apartments_service_1 = require("./service/apartments.service");
const price_service_1 = require("./service/price.service");
const payment_details_service_1 = require("./service/payment_details.service");
const payment_methods_service_1 = require("./service/payment_methods.service");
const sale_details_service_1 = require("./service/sale_details.service");
const roles_service_1 = require("./service/roles.service");
const user_roles_service_1 = require("./service/user-roles.service");
const sales_service_1 = require("./service/sales.service");
const auth_module_1 = require("./options/jwt-service/auth.module");
const users_module_1 = require("./modules/users/users.module");
const buildings_module_1 = require("./modules/buildings/buildings.module");
const apartments_module_1 = require("./modules/apartments/apartments.module");
const clients_module_1 = require("./modules/clients/clients.module");
const payment_details_module_1 = require("./modules/payment_details/payment_details.module");
const sale_details_module_1 = require("./modules/sale_details/sale_details.module");
const sales_module_1 = require("./modules/sales/sales.module");
const roles_module_1 = require("./modules/roles/roles.module");
const payment_methods_module_1 = require("./modules/payment_methods/payment_methods.module");
const Joi = require("@hapi/joi");
let AppModule = class AppModule {
    constructor() { }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    POSTGRES_HOST: Joi.string().required(),
                    POSTGRES_PORT: Joi.number().required(),
                    POSTGRES_USER: Joi.string().required(),
                    POSTGRES_PASSWORD: Joi.string().required(),
                    POSTGRES_DATABASE: Joi.string().required(),
                    PORT: Joi.number(),
                }),
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            buildings_module_1.BuildingsModule,
            apartments_module_1.ApartmentsModule,
            clients_module_1.ClientsModule,
            payment_details_module_1.PaymentDetailsModule,
            sale_details_module_1.SaleDetailsModule,
            sales_module_1.SalesModule,
            roles_module_1.RolesModule,
            payment_methods_module_1.PaymentMethodsModule,
        ],
        controllers: [
            users_controller_1.UsersController,
            clients_controller_1.ClientsController,
            apartments_controller_1.ApartmentsController,
            buildings_controller_1.BuildingsController,
            roles_controller_1.RolesController,
            price_controller_1.PriceController,
            sales_controller_1.SalesController,
            payment_details_controller_1.PaymentDetailsController,
            payment_methods_controller_1.PaymentMethodsController,
            sale_details_controller_1.SaleDetailsController,
            user_roles_controller_1.UserRolesController,
        ],
        providers: [
            users_service_1.UsersService,
            clients_service_1.ClientsService,
            buildings_service_1.BuildingsService,
            apartments_service_1.ApartmentsService,
            price_service_1.PriceService,
            payment_details_service_1.PaymentDetailsService,
            payment_methods_service_1.PaymentMethodsService,
            sale_details_service_1.SaleDetailsService,
            roles_service_1.RolesService,
            user_roles_service_1.UserRolesService,
            sales_service_1.SalesService,
        ],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map