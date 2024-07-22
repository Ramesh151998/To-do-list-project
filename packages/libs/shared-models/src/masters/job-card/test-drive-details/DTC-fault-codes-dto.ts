import { JobCardStatusEnum } from "../../../common";


export class DTCFaultCodesDto {
    id: string;
    jobId: string;
    status: JobCardStatusEnum;
    dTCFaultCodes: string

    constructor(
        id: string,
        jobId: string,
        status: JobCardStatusEnum,
        dTCFaultCodes: string,

    ) {
        this.id = id
        this.jobId = jobId
        this.status = status
        this.dTCFaultCodes = dTCFaultCodes
    }
}