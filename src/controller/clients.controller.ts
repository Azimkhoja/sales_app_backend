import { Controller } from '@nestjs/common';
import { ClientsService } from 'src/service/clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
}
