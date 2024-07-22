export class JcVariationTimeLineDto {
    jcCreated: number;
    jcCompleted: number;
    percentageVariation: number;
    constructor(
        jcCreated: number,
        jcCompleted: number,
        percentageVariation: number,
    ) {
        this.jcCreated = jcCreated;
        this.jcCompleted = jcCompleted;
        this.percentageVariation = percentageVariation;
    }
}