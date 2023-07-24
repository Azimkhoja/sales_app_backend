import { Controller } from '@nestjs/common';
import { SalesService } from 'src/service/sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}
}
