import { CommonResponse, DealerIdReqDto, JobCardIdReqDto, TrackXReportReqDto, JobCardUpdatedDto } from "@trackx/shared-models";
import { AxiosRequestConfig } from "axios";
import { TodoCommonAxiosService } from "../trackx-service/trackx-common-axios-service";
import { CommonExecOptions } from "child_process";

export class DashBoardService extends TodoCommonAxiosService {
    private getUrlWithEndPoint(childUrl: string) {
        return '/job-cards/' + childUrl
    }

    //responseDto   GetAllActiveJobCardsForDashBoards
    async getAllActiveJobCardsForDashboards(req: DealerIdReqDto, config?: AxiosRequestConfig): Promise<CommonResponse> {
        return this.axiosPostCall(this.getUrlWithEndPoint('getAllActiveJobCardsForDashboards'), req, config);
    }

    async getAllReadyForDeliveryJobCardsForDashboards(req: DealerIdReqDto, config?: AxiosRequestConfig): Promise<CommonResponse> {
        return this.axiosPostCall(this.getUrlWithEndPoint('getAllReadyForDeliveryJobCardsForDashboards'), req, config);
    }


    async getAllInprogressJobCardsForDashboards(req: DealerIdReqDto, config?: AxiosRequestConfig): Promise<CommonResponse> {
        return this.axiosPostCall(this.getUrlWithEndPoint('getAllInprogressJobCardsForDashboards'), req, config);
    }

    async getAllJobCardsCountForDashBoards(req: DealerIdReqDto, config?: AxiosRequestConfig): Promise<CommonExecOptions> {
        return this.axiosPostCall(this.getUrlWithEndPoint('getAllJobCardsCountForDashBoards'), req, config);
    }

    //API for DashBoard
    async getServiceCostAndInvoiceRaised(config?: AxiosRequestConfig): Promise<CommonResponse> {
        return await this.axiosPostCall(this.getUrlWithEndPoint('getServiceCostAndInvoiceRaised'), config)
    }
    //API for DashBoard
    async getServiceCost(config?: AxiosRequestConfig): Promise<CommonResponse> {
        return await this.axiosPostCall(this.getUrlWithEndPoint('getServiceCost'), config)
    }

    async getAllJobCardsCount(req: DealerIdReqDto, config?: AxiosRequestConfig): Promise<CommonResponse> {
        return this.axiosPostCall(this.getUrlWithEndPoint('getAllJobCardsCount'), req, config);
    }
}
