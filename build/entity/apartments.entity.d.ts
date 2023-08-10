import Model from './model.entity';
import { Buildings } from './buildings.entity';
import { Price } from './price.entity';
import { Sale_details } from './sale_details.entity';
export declare class Apartments extends Model {
    building_id: Buildings[];
    rooms: number;
    rooms_space: number;
    price: Price[];
    sales_details: Sale_details[];
}
