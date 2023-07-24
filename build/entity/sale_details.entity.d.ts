import Model from './model.entity';
import { Apartments } from './apartments.entity';
export declare class Sale_details extends Model {
    apartments: Apartments[];
    price: number;
}
