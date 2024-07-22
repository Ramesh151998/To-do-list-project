import { CommonResponse, DealerIdReqDto, JobCardIdReqDto, TrackXReportReqDto, JobCardUpdatedDto, vehicleRegNumReq, VehicleHistory, JobCardId, JobCardTrack } from "@trackx/shared-models";
import { AxiosRequestConfig } from "axios";
import { TodoCommonAxiosService } from "../trackx-service/trackx-common-axios-service";
import { CommonExecOptions } from "child_process";

export class CustomerDashBoardService extends TodoCommonAxiosService {
    private getUrlWithEndPoint(childUrl: string) {
        return '/CustomerDashboardDetails/' + childUrl
    }
    

    //responseDto   GetAllActiveJobCardsForDashBoards
    async getJobCardDataByRegNum(req: vehicleRegNumReq, config?: AxiosRequestConfig): Promise<VehicleHistory> {
        return this.axiosPostCall(this.getUrlWithEndPoint('getJobCardDataByRegNum'), req, config);
    }

    async getJobCardDataById(req: JobCardId, config?: AxiosRequestConfig): Promise<JobCardTrack> {
        return this.axiosPostCall(this.getUrlWithEndPoint('getJobCardDataById'), req, config);
    }


}