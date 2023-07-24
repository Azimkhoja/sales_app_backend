import Model from './model.entity';
import { Apartments } from './apartments.entity';
export declare class Price extends Model {
    apartments: Apartments[];
    apartment_price: number;
    is_active_price: string;
}
