export class CustomerDetails {
    name: string;
    phoneNo: string;
    email: string;
    model: string;
    regNo: string;
    chasisNo: string;

    constructor(name: string,phoneNo: string,email: string,model: string,regNo: string,chasisNo: string,){
        this.name=name;
        this.phoneNo=phoneNo;
        this.email=email;
        this.model=model;
        this.regNo=regNo;
        this.chasisNo=chasisNo;
    }
}