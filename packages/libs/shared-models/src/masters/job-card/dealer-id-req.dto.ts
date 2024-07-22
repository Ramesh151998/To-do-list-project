export class DealerIdReqDto {
    dealerCode: string;
    companyCode: string;
    constructor(
        dealerCode: string,
        companyCode: string
    ) {
        this.dealerCode = dealerCode;
        this.companyCode = companyCode;
    }
}