import { JobCardMakeEnum } from "@trackx/shared-models";

export class GetAllCustomersByRegNoDto {
    id: number;
    name: string;
    chassisNo: string;
    email: string;
    modelName: string;
    phoneNo: number;
    trim: string;
    vehicleNo: string;
    make: JobCardMakeEnum;
    constructor(id: number, name: string, chassisNo: string, email: string, modelName: string, phoneNo: number, trim: string, vehicleNo: string, make: JobCardMakeEnum) {
        this.id = id;
        this.name = name;
        this.chassisNo = chassisNo;
        this.email = email;
        this.modelName = modelName;
        this.phoneNo = phoneNo;
        this.trim = trim;
        this.vehicleNo = vehicleNo
        this.make = make;

    }

}