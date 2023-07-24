import { Controller } from '@nestjs/common';
import { SaleDetailsService } from 'src/service/sale_details.service';

@Controller('sale-details')
export class SaleDetailsController {
  constructor(private readonly saleDetailsService: SaleDetailsService) {}
}
