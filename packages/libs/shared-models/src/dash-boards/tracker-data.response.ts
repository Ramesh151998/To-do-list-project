export class TrackerData {
    areaName: string;
    startTime: string;
    endTime: string;

    constructor(areaName: string,startTime: string,endTime: string,){
        this.areaName=areaName;
        this.startTime=startTime;
        this.endTime=endTime;
    }
}