import { AxiosRequestConfig } from "axios";
import { TodoCommonAxiosService } from "../trackx-service/trackx-common-axios-service";
import { CommonResponse } from "@trackx/shared-models";

export class LoginService extends TodoCommonAxiosService {
    private getURLwithMainEndPoint(childUrl: string) {
        return '/auth/' + childUrl;
        
    };

    async createUser(req: any, config?: AxiosRequestConfig): Promise<CommonResponse> {
        return await this.axiosPostCall(this.getURLwithMainEndPoint('createUser'), req, config);
    };

    async findUser(req: any, config?: AxiosRequestConfig): Promise<CommonResponse> {
        return await this.axiosPostCall(this.getURLwithMainEndPoint('findUser'), req, config);
    };

}