// import { StatusEnum } from "../common";

import { GlobalResponseObject } from "../common";
import { CustomerDetails } from "./customer-details.response";
import { JobCardAbstract } from "./jobcard-abstract.response";
import { TrackerData } from "./tracker-data.response";

// export class vehicleJobCardDataResponse{
//     jobCardNo:String;
//     jobCardId:Number;
//     vehicleNo:String;
//     vehicleModel:String;
//     customerName:String;
//     phoneNo:String;
//     email:String;
//     inTime:Date;
//     outTime:Date;
//     odoMeterReading:String; 
//     status:StatusEnum;
//     constructor(
//         jobCardNo:String,
//         jobCardId:Number,
//         vehicleNo:String,
//         vehicleModel:String,
//         customerName:String,
//         phoneNo:String,
//         email:String,
//         inTime:Date,
//         outTime:Date,
//         odoMeterReading:String,
//         status:StatusEnum){
//             this.jobCardNo=jobCardNo;
//             this.jobCardId=jobCardId;
//             this.vehicleNo=vehicleNo;
//             this.vehicleModel=vehicleModel;
//             this.customerName=customerName;
//             this.phoneNo=phoneNo;
//             this.email=email;
//             this.inTime=inTime;
//             this.outTime=outTime;
//             this.odoMeterReading=odoMeterReading;
//             this.status=status;


//     }
// }

export class VehicleHistoryClass{
    customerDetails: CustomerDetails;
    activeJobCardDetails: JobCardAbstract
    history: JobCardAbstract[]
}

