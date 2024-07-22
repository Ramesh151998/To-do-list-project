export class GetAllActiveJobCardsForDashBoards {
    vehicleNo: string;
    vehicleData: VehicleDataDashBoards;
    serviceAreaId: number;
    constructor(
        vehicleNo: string,
        vehicleData: VehicleDataDashBoards,
        serviceAreaId?: number
    ) {
        this.vehicleNo = vehicleNo;
        this.vehicleData = vehicleData;
        this.serviceAreaId = serviceAreaId;
    }
}

export class VehicleDataDashBoards {
    customerName: string;
    jobCardNo: string;
    jobCardId: number;
    age: string;
    constructor(
        customerName: string,
        jobCardNo: string,
        jobCardId: number,
        age: string,
    ) {
        this.customerName = customerName;
        this.jobCardNo = jobCardNo;
        this.jobCardId = jobCardId;
        this.age = age;
    }

}