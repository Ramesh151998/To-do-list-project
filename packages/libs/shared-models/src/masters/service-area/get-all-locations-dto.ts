export class GetAllLocationsDto {
    areaName: string;
    areaCode: string;
    maxRange: number;
    areaId: number;
    sequence: number;
    constructor(
        areaName: string,
        areaCode: string,
        maxRange: number,
        areaId: number,
        sequence: number
    ) {
        this.areaName = areaName;
        this.areaCode = areaCode;
        this.maxRange = maxRange;
        this.areaId = areaId;
        this.sequence = sequence;
    }
}