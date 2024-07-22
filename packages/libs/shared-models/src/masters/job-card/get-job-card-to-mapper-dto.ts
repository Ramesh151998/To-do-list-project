import { JobCardStatusEnum } from "../../common";

export class GetJobCardToMapperDto{
    jobCardId:number;
    obdCode:string;
    registrationNo:string;
    status:JobCardStatusEnum;
    cost:number;
    serviceId:number;
    complaintId:number;
    constructor(jobCardId:number,
        obdCode:string,
        registrationNo:string,
        status:JobCardStatusEnum,
        cost:number,
        serviceId:number,
        complaintId:number){
            this.jobCardId=jobCardId;
            this.obdCode=obdCode;
            this.registrationNo=registrationNo;
            this.status=status;
            this.cost=cost;
            this.serviceId=serviceId;
            this.complaintId=complaintId

    }

}





