"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerConfig = new swagger_1.DocumentBuilder()
    .setTitle('Sales Appartment API Documentation')
    .setVersion('1.0')
    .addTag('API')
    .build();
//# sourceMappingURL=swagger.option.js.map