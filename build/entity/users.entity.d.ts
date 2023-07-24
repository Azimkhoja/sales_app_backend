import Model from './model.entity';
import { Sales } from './sales.entity';
export declare class Users extends Model {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    is_active: boolean;
    role_id: number;
    sales: Sales;
}
