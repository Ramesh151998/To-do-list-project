import { DealerIdReqDto } from "../job-card";

export class GetCustomersReqDto extends DealerIdReqDto {
    registrationNo: string;
    constructor(registrationNo: string, dealerCode: string, companyCode: string) {
        super(dealerCode, companyCode)
        this.registrationNo = registrationNo;

    }
}