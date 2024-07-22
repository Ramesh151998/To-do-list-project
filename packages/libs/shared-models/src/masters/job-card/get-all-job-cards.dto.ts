import { JobCardStatusEnum } from "../../common";

export class GetAllJobCardsDto {
    jobId: number;
    jobCardNo: string;
    status: JobCardStatusEnum;
    totalCost: number;
    registrationNo: string;
    customerName:string;
    constructor(
        jobId: number,
        jobCardNo: string,
        status: JobCardStatusEnum,
        totalCost: number,
        registrationNo: string,
        customerName:string
    ) {
        this.jobId = jobId
        this.jobCardNo = jobCardNo
        this.status = status
        this.totalCost = totalCost
        this.registrationNo = registrationNo
        this.customerName=customerName
    }
}