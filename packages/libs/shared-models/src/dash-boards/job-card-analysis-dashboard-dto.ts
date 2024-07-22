import { GetAllJobCardsAvg } from "./get-job-cards-avg-dto";
import { GetAllJobCardsCount } from "./get-job-cards-count-dto";
import { JcVariationsDto } from "./jc-variations-dto";

export class JobCardAnalysisDashBoardDto {
    counts: GetAllJobCardsCount;
    invoicePendingJcTotal: number;
    NoOfVehiclesInUnit: number;
    averages: GetAllJobCardsAvg;
    variations: JcVariationsDto;
    constructor(
        counts: GetAllJobCardsCount,
        invoicePendingJcTotal: number,
        NoOfVehiclesInUnit: number,
        averages: GetAllJobCardsAvg,
        variations: JcVariationsDto
    ) {
        this.counts = counts;
        this.invoicePendingJcTotal = invoicePendingJcTotal;
        this.NoOfVehiclesInUnit = NoOfVehiclesInUnit;
        this.averages = averages;
        this.variations = variations;
    }
}