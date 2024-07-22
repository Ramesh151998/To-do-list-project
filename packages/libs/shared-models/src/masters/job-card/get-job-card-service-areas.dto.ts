import { JobTrackerStatusEnum, JobCardStatusEnum } from "../../common";
import { GetJobCardComplaintsDto } from "./get-job-card-complaints.dto";

export class GetJobCardServiceAreas {
    serviceId: number;
    serviceName: string;
    serviceAreaCode: string;
    serviceStatus: JobTrackerStatusEnum;
    tyrePressure: number;
    odometerReading: number;
    inTime: any;
    outTime: any;
    totalDuration: string;
    fuel: number;
    totalCostPerService: number;
    complaints: GetJobCardComplaintsDto[];
    jobCardTrackerId?:string;
    tax?:number;
    constructor(
        serviceId: number,
        serviceName: string,
        serviceAreaCode: string,
        serviceStatus: JobTrackerStatusEnum,
        tyrePressure: number,
        odometerReading: number,
        inTime: any,
        outTime: any,
        totalDuration: string,
        fuel: number,
        totalCostPerService: number,
        complaints: GetJobCardComplaintsDto[],
        jobCardTrackerId?:string,
        tax?:number,
    ) {
        this.serviceId = serviceId;
        this.serviceName = serviceName;
        this.serviceAreaCode = serviceAreaCode;
        this.serviceStatus = serviceStatus;
        this.tyrePressure = tyrePressure;
        this.odometerReading = odometerReading;
        this.inTime = inTime;
        this.outTime = outTime;
        this.totalDuration = totalDuration;
        this.fuel = fuel;
        this.totalCostPerService = totalCostPerService;
        this.complaints = complaints;
        this.jobCardTrackerId=jobCardTrackerId;
        this.tax=tax;
    }
}