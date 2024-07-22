import { DealerIdReqDto } from "./dealer-id-req.dto";

export class TrackXReportReqDto extends DealerIdReqDto {
    fromDate: string;
    toDate: string;
    constructor(
        fromDate: string,
        toDate: string,
        dealerCode: string,
        companyCode: string
    ) {
        super(dealerCode, companyCode)
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
}