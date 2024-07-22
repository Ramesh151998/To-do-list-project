import { DTCFaultCodesDto } from "./DTC-fault-codes-dto"

export class TestDriveDetailsDTO{

    registrationNo: string
    oBDMac: number
    advisorName: string
    driverName: string
    odoMeter: number
    dTCFaultCodes: string;
    fuelPercent: string
    jobId: number
    dealerCode:number

constructor(
    registrationNo: string,
    oBDMac: number,
    advisorName: string,
    driverName: string,
    odoMeter: number,
    dTCFaultCodes: string,
    fuelPercent: string,
    jobId: number,
    dealerCode:number

){
    this.registrationNo=registrationNo
    this.oBDMac=oBDMac
    this.advisorName=advisorName
    this.driverName=driverName
    this.odoMeter=odoMeter
    this.dTCFaultCodes=dTCFaultCodes
    this.fuelPercent=fuelPercent
    this.jobId=jobId
    this.dealerCode=dealerCode

}

}
