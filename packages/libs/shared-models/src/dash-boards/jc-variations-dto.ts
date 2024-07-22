import { JcVariationTimeLineDto } from "./jc-variations-time-line-dto";

export class JcVariationsDto {
    dayVariation: JcVariationTimeLineDto;
    weekVariation: JcVariationTimeLineDto;
    monthVariation: JcVariationTimeLineDto;
    yearVariation: JcVariationTimeLineDto;
    constructor(
        dayVariation: JcVariationTimeLineDto,
        weekVariation: JcVariationTimeLineDto,
        monthVariation: JcVariationTimeLineDto,
        yearVariation: JcVariationTimeLineDto,
    ) {
        this.dayVariation = dayVariation;
        this.weekVariation = weekVariation;
        this.monthVariation = monthVariation;
        this.yearVariation = yearVariation;
    }
}