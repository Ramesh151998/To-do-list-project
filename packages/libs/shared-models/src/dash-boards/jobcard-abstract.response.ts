export class JobCardAbstract {
    jobCardId: number;
    jobCardCreatedAt: Date;
    fuelStartReading: string;
    fuelEndReading: string;
    odoMeterStartReading: string;
    odoMeterEndReading: string;
    advisorName: string;

    constructor(jobCardId: number,jobCardCreatedAt: Date,fuelStartReading: string,fuelEndReading: string,odoMeterStartReading: string,odoMeterEndReading: string,advisorName: string){

        this.jobCardId=jobCardId;
        this.jobCardCreatedAt=jobCardCreatedAt;
        this.fuelStartReading=fuelStartReading;
        this.fuelEndReading=fuelEndReading;
        this.odoMeterStartReading=odoMeterStartReading;
        this.odoMeterEndReading=odoMeterEndReading;
        this.advisorName=advisorName;  
    }
}