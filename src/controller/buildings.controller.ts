import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BuildingsService } from 'src/service/buildings.service';

@ApiTags('Buildings')
@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}
}
