import { DealerIdReqDto } from "../masters";

export class vehicleRegNumReq extends DealerIdReqDto {
    registrationNum: string;
    constructor(registrationNum: string, dealerCode: string, companyCode?: string) {
        super(dealerCode, companyCode)
        this.registrationNum = registrationNum;
    }
}