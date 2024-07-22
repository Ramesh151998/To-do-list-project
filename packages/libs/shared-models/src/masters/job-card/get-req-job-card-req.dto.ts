import { DealerIdReqDto } from "./dealer-id-req.dto";

export class JobCardReqDto /*extends DealerIdReqDto*/ {
    jobCardId: number;
    dealerCode:string;
    constructor(
        jobCardId: number,
        dealerCode: string,
    ) {
       this.dealerCode=dealerCode;
        this.jobCardId = jobCardId;
    }
}