import { GetJobCardServiceAreas } from "./get-job-card-service-areas.dto";

export class GetJobCardDetailsDto {
    jobCardId: string;
    jobCardNo: string;
    dealerCode: string;
    companyCode: string;
    customerName: string;
    registrationNo: string;
    phoneNo: string;
    modelName: string;
    chassisNo: string;
    OBDMAC: string;
    totalInvoice: number;
    serviceAreas: GetJobCardServiceAreas[];
    tyrePressure: number;
    odometerReading: number;
    fuel: number;
    isExistsRecord: boolean;
    constructor(
        jobCardId: string,
        jobCardNo: string,
        dealerCode: string,
        companyCode: string,
        customerName: string,
        registrationNo: string,
        phoneNo: string,
        modelName: string,
        chassisNo: string,
        OBDMAC: string,
        totalInvoice: number,
        serviceAreas: GetJobCardServiceAreas[],
        tyrePressure: number,
        odometerReading: number,
        fuel: number,
        isExistsRecord?: boolean
    ) {
        this.jobCardId = jobCardId;
        this.jobCardNo = jobCardNo;
        this.dealerCode = dealerCode;
        this.companyCode = companyCode;
        this.customerName = customerName;
        this.registrationNo = registrationNo;
        this.phoneNo = phoneNo;
        this.modelName = modelName;
        this.chassisNo = chassisNo;
        this.OBDMAC = OBDMAC;
        this.totalInvoice = totalInvoice;
        this.serviceAreas = serviceAreas;
        this.tyrePressure = tyrePressure;
        this.odometerReading = odometerReading;
        this.fuel = fuel;
        this.isExistsRecord = isExistsRecord;
    }
}