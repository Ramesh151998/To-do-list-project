

export class GetServiceIdDto {
    serviceId: number;
    cost: number;
    constructor(serviceId: number, cost: number) {
        this.serviceId = serviceId;
        this.cost = cost;
    }
}