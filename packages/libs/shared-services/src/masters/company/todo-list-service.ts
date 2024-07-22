import axios, { AxiosRequestConfig } from "axios";
import { TodoCommonAxiosService } from "../../trackx-service/trackx-common-axios-service";
import { CommonResponse, DealerIdReqDto } from "@trackx/shared-models";

export class TodoSharedService extends TodoCommonAxiosService {

    private getURLwithMainEndPoint(childUrl: string) {
        return '/todolist/' + childUrl;
    };
    async createTodo(req: any): Promise<CommonResponse> {
        return await this.axiosPostCall(this.getURLwithMainEndPoint('createTodo'), req);
    };
    // async createTodo(dto: any): Promise<any> {
    //     return await axios.post('http://localhost:5004/todolist/createTodo', dto)
    // }
    async getTodo(): Promise<CommonResponse> {
        return await this.axiosPostCall(this.getURLwithMainEndPoint('gettodo'))
    }
    async updateTodo(req: DealerIdReqDto): Promise<CommonResponse> {
        return await this.axiosPostCall(this.getURLwithMainEndPoint('updateTodo'), req,)
    }
    async activateOrDeactivateTodo(req: DealerIdReqDto): Promise<CommonResponse> {
        return await this.axiosPostCall(this.getURLwithMainEndPoint('activateOrDeactivateTodo'), req,)
    }

  

}