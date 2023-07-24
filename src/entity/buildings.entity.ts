import { Column, Entity, JoinColumn, JoinTable, OneToMany } from 'typeorm';
import Model from './model.entity';
import { Apartments } from './apartments.entity';

@Entity('Buildings')
export class Buildings extends Model {
  @Column()
  name: string;

  @Column()
  building_number: string;

  @Column()
  entrance_number: string;

  @Column()
  floor_number: number;

  @OneToMany((type) => Apartments, (apartment) => apartment)
  @JoinColumn({ name: 'building_id' })
  apartments: Apartments;
}
