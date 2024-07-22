export class JobCardGroupedResponse {
    timeLine: string;
    worked: number;
    rework: number;
    percentage: number;
    constructor(
        timeLine: string,
        worked: number,
        rework: number,
        percentage: number,

    ) {
        this.timeLine = timeLine
        this.worked = worked
        this.rework = rework
        this.percentage = percentage
    }
}