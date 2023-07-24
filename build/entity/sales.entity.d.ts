import Model from './model.entity';
import { Clients } from './clients.entity';
import { Users } from './users.entity';
export declare class Sales extends Model {
    user: Users[];
    client: Clients[];
    total_price: number;
    qty: number;
}
