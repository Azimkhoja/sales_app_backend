import Model from './model.entity';
import { Apartments } from './apartments.entity';
export declare class Buildings extends Model {
    name: string;
    building_number: string;
    entrance_number: string;
    floor_number: number;
    apartments: Apartments;
}
