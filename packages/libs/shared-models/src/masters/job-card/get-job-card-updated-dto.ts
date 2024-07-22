import { JobCardMakeEnum } from "../../common";

export class JobCardUpdatedDto {
    jobCardId: number;
    registrationNo: string;
    obdMac: string;
    jobCardNo: string;
    name: string;
    phoneNo: string;
    chassisNo: string;
    modelName: string;
    trim: string;
    make: JobCardMakeEnum;
    customerId:string;
    assignedComplaints: JobCardAssignedComplaintsDto[];
    constructor(
        jobCardId: number,
        registrationNo: string,
        obdMac: string,
        jobCardNo: string,
        name: string,
        phoneNo: string,
        chassisNo: string,
        modelName: string,
        trim: string,
        make: JobCardMakeEnum,
        customerId:string,
        assignedComplaints: JobCardAssignedComplaintsDto[],
    ) {
        this.jobCardId = jobCardId;
        this.registrationNo = registrationNo;
        this.obdMac = obdMac;
        this.jobCardNo = jobCardNo;
        this.name = name;
        this.phoneNo = phoneNo;
        this.chassisNo = chassisNo;
        this.modelName = modelName;
        this.trim = trim;
        this.make=make;
        this.customerId=customerId;
        this.assignedComplaints = assignedComplaints;
    }
}


export class JobCardAssignedComplaintsDto {
    complaintId: number;
    serviceId: number;
    cost: number;
    constructor(
        complaintId: number,
        serviceId: number,
        cost: number,
    ) {
        this.complaintId = complaintId;
        this.serviceId = serviceId;
        this.cost = cost;
    }
}