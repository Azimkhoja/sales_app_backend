import { Buildings } from "src/entity/buildings.entity";
export declare class CreateApartmentDto {
    building_id: Buildings;
    rooms?: number;
    room_space?: string;
}
