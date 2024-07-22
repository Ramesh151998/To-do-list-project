import {
  CommonResponse,
  FeatureFilesReqModel,
  FileUploadIdModel,
  GlobalResponseObject
} from '@trackx/shared-models';
import { AxiosRequestConfig } from 'axios';
import { TodoCommonAxiosService } from '../trackx-common-axios-service';

export class FileHandlingService extends TodoCommonAxiosService {
  private getURLwithMainEndPoint(childUrl: string) {
    return '/file-handling/' + childUrl;
  };
  async fileUpload(req: any, config?: AxiosRequestConfig): Promise<CommonResponse> {
    return await this.axiosPostCall(this.getURLwithMainEndPoint('fileUpload'), req, config);
  };


  async deleteSingleFile(req: FileUploadIdModel, config?: AxiosRequestConfig): Promise<GlobalResponseObject> {
    return await this.axiosPostCall(this.getURLwithMainEndPoint('deleteSingleFile'), req, config);
  }

  async getSavedFilesData(req: FeatureFilesReqModel, config?: AxiosRequestConfig): Promise<CommonResponse> {
    return await this.axiosPostCall(this.getURLwithMainEndPoint('getSavedFilesData'), req, config);
  }
}
