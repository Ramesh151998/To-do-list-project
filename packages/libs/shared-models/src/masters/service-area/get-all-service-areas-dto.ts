import { GetAllUnitsDto } from "./get-units-dto";

export class GetAllServiceAreasDto {
    companyCode: string;
    units: GetAllUnitsDto[];
    constructor(
        companyCode: string,
        units: GetAllUnitsDto[],
    ) {
        this.companyCode = companyCode;
        this.units = units;
    }
}