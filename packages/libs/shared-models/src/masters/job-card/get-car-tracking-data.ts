import { JobTrackerStatusEnum, JobCardStatusEnum } from "../../common";

export class GetJobCardMappedComplaints {
    complaint: string;

    constructor(
        complaint: string
    ) {
        this.complaint = complaint;
    }
}



export class GetCarTrackingData {
    serviceAreaId: number;
    serviceAreaName: string;
    serviceStatus: JobTrackerStatusEnum;
    complaints: string[];


    constructor(
        serviceAreaId: number,
        serviceAreaName: string,
        serviceStatus: JobTrackerStatusEnum,
        complaints: string[],
    ) {
        this.serviceAreaId = serviceAreaId;
        this.serviceAreaName = serviceAreaName;
        this.serviceStatus = serviceStatus;
        this.complaints = complaints;
    }
}
