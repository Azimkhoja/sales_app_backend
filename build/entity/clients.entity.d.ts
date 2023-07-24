import Model from './model.entity';
import { Sales } from './sales.entity';
export declare class Clients extends Model {
    first_name: string;
    last_name: string;
    middle_name: string;
    address: string;
    contact_number: string;
    sales: Sales[];
}
