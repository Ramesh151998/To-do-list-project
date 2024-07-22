export class InvoiceDTO {
    serviceName: string;
    totalCostPerService: number;
    tax: number;
    totalCost: number;
    constructor(serviceName: string,totalCostPerService: number, tax: number,totalCost: number){
        this.serviceName=serviceName;
        this.tax=tax;
        this.totalCost=totalCost;
        this.totalCostPerService=totalCostPerService
    }
}