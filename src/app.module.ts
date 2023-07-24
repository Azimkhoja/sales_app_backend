import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { DatabaseModule } from './database/database.module';
import { UsersController } from './controller/users.controller';
import { ClientsController } from './controller/clients.controller';
import { ApartmentsController } from './controller/apartments.controller';
import { BuildingsController } from './controller/buildings.controller';
import { RolesController } from './controller/roles.controller';
import { PriceController } from './controller/price.controller';
import { SalesController } from './controller/sales.controller';
import { PaymentDetailsController } from './controller/payment_details.controller';
import { PaymentMethodsController } from './controller/payment_methods.controller';
import { SaleDetailsController } from './controller/sale_details.controller';
import { UserRolesController } from './controller/user_roles.controller';
import { UsersService } from './service/users.service';
import { ClientsService } from './service/clients.service';
import { BuildingsService } from './service/buildings.service';
import { ApartmentsService } from './service/apartments.service';
import { PriceService } from './service/price.service';
import { PaymentDetailsService } from './service/payment_details.service';
import { PaymentMethodsService } from './service/payment_methods.service';
import { SaleDetailsService } from './service/sale_details.service';
import { RolesService } from './service/roles.service';
import { UserRolesService } from './service/user-roles.service';
import { SalesService } from './service/sales.service';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DATABASE: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
  ],
  controllers: [
    UsersController,
    ClientsController,
    ApartmentsController,
    BuildingsController,
    RolesController,
    PriceController,
    SalesController,
    PaymentDetailsController,
    PaymentMethodsController,
    SaleDetailsController,
    UserRolesController,
  ],
  providers: [
    UsersService,
    ClientsService,
    BuildingsService,
    ApartmentsService,
    PriceService,
    PaymentDetailsService,
    PaymentMethodsService,
    SaleDetailsService,
    RolesService,
    UserRolesService,
    SalesService,
  ],
})
export class AppModule {
  constructor() {}
}
