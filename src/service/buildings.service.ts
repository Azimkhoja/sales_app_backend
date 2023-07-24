import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class BuildingsService {
  constructor(private readonly dataSource: DataSource) {}
}
