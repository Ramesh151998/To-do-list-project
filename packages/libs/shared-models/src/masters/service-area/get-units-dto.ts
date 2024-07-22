import { GetAllLocationsDto } from "./get-all-locations-dto";

export class GetAllUnitsDto {
    dealerCode: string;
    dealerName: string;
    locations: GetAllLocationsDto[];
    constructor(
        dealerCode: string,
        dealerName: string,
        locations: GetAllLocationsDto[],
    ) {
        this.dealerCode = dealerCode;
        this.dealerName = dealerName;
        this.locations = locations;
    }
}