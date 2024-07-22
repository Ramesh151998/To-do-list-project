
import { MinusCircleOutlined } from '@ant-design/icons';
import { FileUploadIdModel } from '@trackx/shared-models';
import { FileHandlingService } from '@trackx/shared-services';
import { Popconfirm, Tooltip } from 'antd';
import { AlertMessages } from '../../components/common';
import { useIAMClientState } from '../iam-client-react';

interface viewFiles {
    name: string;
    uid: string;
    size: number;
    type: string;
    fileDescription: string;
    filePath: string;
    lastModified: string;
    lastModifiedDate: string;
    percent: number;
    fileUploadId: string;
    base64Url: string;
}

interface IProps {
    filesData: viewFiles[];
    required: boolean;
    getAllData?: () => void;
}


const ViewFileHandling = (props: IProps) => {
    const { filesData, required, getAllData } = props;
    const fileUploadPath = window[`_env_`]['APP_TRACKX_SERVICE_URL'];
    const { IAMClientAuthContext } = useIAMClientState();

    const fileService = new FileHandlingService();





    function deleteFile(fileUploadId) {
        const req = new FileUploadIdModel(fileUploadId, IAMClientAuthContext.dealerCode, IAMClientAuthContext.user.userName)
        fileService.deleteSingleFile(req).then((res) => {
            if (res.status) {
                AlertMessages.getSuccessMessage(res.internalMessage);
                getAllData();
            } else {
                AlertMessages.getErrorMessage(res.internalMessage);
            }
        }).catch(err => console.log(err.message, 'err message'))
    };



    return <>

        {filesData?.map((rec: any) => {
            if (!rec || typeof rec === 'object') {
                <></>
            }
            let path = rec?.base64Url ? rec?.base64Url : fileUploadPath + '/' + rec?.filePath?.slice(13);

            if (rec) {
                return <>
                    <a href={`${path}`} target="_blank" style={{ fontSize: '12px' }}>{rec?.filePath?.slice(13)}</a> &nbsp;
                    <Popconfirm onConfirm={e => { deleteFile(rec?.fileUploadId) }} title={'Are you sure to Delete File ?'}>
                        <Tooltip placement='bottom' title={'Remove'}>
                            <MinusCircleOutlined hidden={required} type="delete" style={{ color: 'red', fontSize: '13px' }} />
                        </Tooltip>
                    </Popconfirm>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </>
            }
            return <></>
        })}

    </>
}

export default ViewFileHandling