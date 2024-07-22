import { JobTrackerStatusEnum} from "../../common";

export class DTCFaultCodesDto{
    code:string;
    status:JobTrackerStatusEnum;
    constructor(code:string,
        status:JobTrackerStatusEnum){
            this.code=code;
            this.status=status;
        }
}