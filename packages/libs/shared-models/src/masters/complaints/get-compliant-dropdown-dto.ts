export class GetComplaintsDropDownDto {
    id: number;
    serviceName: string;
    category:string;
    constructor(
        id: number,
        serviceName: string,
        category:string,
    ) {
        this.id = id;
        this.serviceName = serviceName;
        this.category=category;
    }
}
