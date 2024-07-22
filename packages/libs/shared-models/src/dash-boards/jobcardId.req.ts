import { DealerIdReqDto } from "../masters";

export class JobCardId extends DealerIdReqDto {
    id: number;
    constructor(id: number, dealerCode: string, companyCode: string) {
        super(dealerCode, companyCode)
        this.id = id;
    }
}