import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    MinusCircleOutlined,
    SyncOutlined,
} from '@ant-design/icons';
import { JobTrackerStatusEnum } from '@trackx/shared-models';
import { Tag } from 'antd';
interface IProps {
    status: JobTrackerStatusEnum | string;
}
export const StatusTag = (props: IProps) => {
    const { status } = props;

    const getData = (status: JobTrackerStatusEnum | string) => {
        switch (status) {
            case JobTrackerStatusEnum.OPEN:
                return <Tag icon={<ExclamationCircleOutlined />} color="warning" style={{ fontSize: '10px' }}>
                    {JobTrackerStatusEnum.OPEN}
                </Tag>
                break;
            case JobTrackerStatusEnum.COMPLETED:
                return <Tag icon={<CheckCircleOutlined />} color="success" style={{ fontSize: '10px' }}>
                    {JobTrackerStatusEnum.COMPLETED}
                </Tag>
                break;

            case JobTrackerStatusEnum.CANCELLED:
                return <Tag icon={<CloseCircleOutlined />} color="error" style={{ fontSize: '10px' }}>
                    {JobTrackerStatusEnum.CANCELLED}
                </Tag>
                break;


            case JobTrackerStatusEnum.COMPLETED:
                return <Tag icon={<ClockCircleOutlined />} color="default" style={{ fontSize: '10px' }}>
                    {JobTrackerStatusEnum.COMPLETED}
                </Tag>
                break;


            case JobTrackerStatusEnum.IN_PROGRESS:
                return <Tag icon={<SyncOutlined spin />} color="processing" style={{ fontSize: '10px' }}>
                    {JobTrackerStatusEnum.IN_PROGRESS}
                </Tag>
                break;

            default:
                return <Tag icon={<MinusCircleOutlined />} color="default" style={{ fontSize: '10px' }}>
                    stop
                </Tag>
                break;
        }
    }
    return (
        <>{
            getData(status)
        }</>
    )
}

export default StatusTag