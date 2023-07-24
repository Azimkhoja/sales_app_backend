import { Controller } from '@nestjs/common';
import { ApartmentsService } from 'src/service/apartments.service';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}
}
