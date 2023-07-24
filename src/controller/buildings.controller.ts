import { Controller } from '@nestjs/common';
import { BuildingsService } from 'src/service/buildings.service';

@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}
}
