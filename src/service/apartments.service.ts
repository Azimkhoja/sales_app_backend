import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ApartmentsService {
  constructor(private readonly dataSource: DataSource) {}
}
