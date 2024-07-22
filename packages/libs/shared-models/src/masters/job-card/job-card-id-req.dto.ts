import { DealerIdReqDto } from "./dealer-id-req.dto";

export class JobCardIdReqDto extends DealerIdReqDto {
    jobCardId: number;

    constructor(
        jobCardId: number,
        dealerCode: string,
        companyCode: string
    ) {
        super(dealerCode, companyCode)
        this.jobCardId = jobCardId;
    }
}