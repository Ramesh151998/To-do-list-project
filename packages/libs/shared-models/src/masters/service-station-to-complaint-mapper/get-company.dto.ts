import { DealerIdReqDto } from "../job-card";


export class GetServiceIdReqDto extends DealerIdReqDto {
    complaintId: number;

    constructor(complaintId: number, dealerCode: string, companyCode: string) {
        super(dealerCode, companyCode)
        this.complaintId = complaintId;
    }
}