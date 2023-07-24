import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import Model from './model.entity';
import { Buildings } from './buildings.entity';
import { Price } from './price.entity';
import { Sale_details } from './sale_details.entity';

@Entity('Apartments')
export class Apartments extends Model {
  @ManyToOne((type) => Buildings, (building) => building)
  @JoinColumn({ name: 'building_id' })
  building_id: Buildings[];

  @Column()
  rooms: number;

  @Column()
  rooms_space: number;

  @OneToMany((type) => Price, (price) => price.id)
  price: Price[];
  
  @OneToMany((type) => Sale_details, (sales_details) => sales_details)
  sales_details: Sale_details[];
}
