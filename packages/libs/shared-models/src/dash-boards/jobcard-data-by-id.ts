import { GlobalResponseObject } from "../common";
import { TrackerData } from "./tracker-data.response";

export class JobCardTrack extends GlobalResponseObject{
    data?:TrackerData[];
    constructor(status: boolean, 
        errorCode: number, 
        internalMessage: string, 
        data?: TrackerData[]) {
        super(status, errorCode, internalMessage);
        this.data = data;
       }
}