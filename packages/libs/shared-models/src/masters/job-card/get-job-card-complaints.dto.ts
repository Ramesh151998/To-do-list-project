export class GetJobCardComplaintsDto {
    complaintCode: string;
    complaintName: string;
    cost: number;
    complainId?:number;
    constructor(
        complaintCode: string,
        complaintName: string,
        cost: number,
        complainId?:number
    ) {
        this.complaintCode = complaintCode;
        this.complaintName = complaintName;
        this.cost = cost;
        this.complainId=complainId;
    }
}