import { Controller } from '@nestjs/common';
import { PriceService } from 'src/service/price.service';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}
}
