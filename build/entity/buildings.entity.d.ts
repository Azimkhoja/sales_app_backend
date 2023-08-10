import Model from './model.entity';
import { Apartments } from './apartments.entity';
import { Towns } from './town.entity';
export declare class Buildings extends Model {
    town: Towns;
    name: string;
    entrance_number: number;
    floor_number: number;
    apartments: Apartments[];
    apartment_number: number;
}
