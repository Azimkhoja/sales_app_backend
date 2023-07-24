import { BaseEntity } from 'typeorm';
export default abstract class Model extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}
