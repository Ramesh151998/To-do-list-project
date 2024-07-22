

export class GetAllJobCardsCount {
    jcCountByDate: number;
    jcCountByMonth: number;
    jcCountByYear: number;

    constructor(
        jcCountByDate: number,
        jcCountByMonth: number,
        jcCountByYear: number,
    ) {
        this.jcCountByDate = jcCountByDate
        this.jcCountByMonth = jcCountByMonth
        this.jcCountByYear = jcCountByYear
    }

}

