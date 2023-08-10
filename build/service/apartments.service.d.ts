import { Apartments } from 'src/entity/apartments.entity';
import { Repository } from 'typeorm';
export declare class ApartmentsService {
    private readonly apartmentRepository;
    constructor(apartmentRepository: Repository<Apartments>);
}
