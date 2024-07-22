import { GlobalResponseObject } from "../common/global-response-object";
import { VehicleHistoryClass } from "./vehicle-jobcard-data.response";

export class VehicleHistory extends GlobalResponseObject {
    data?: VehicleHistoryClass;

    constructor(status: boolean, 
        errorCode: number, 
        internalMessage: string, 
        data?: VehicleHistoryClass) {
        super(status, errorCode, internalMessage);
        this.data = data;
       }
}