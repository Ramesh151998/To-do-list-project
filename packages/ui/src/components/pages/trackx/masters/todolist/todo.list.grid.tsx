import { EditFilled, RightSquareOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Drawer, Form, message, Modal, Popconfirm, Switch, Table } from 'antd';
import { useIAMClientState } from 'packages/ui/src/common';
import { AlertMessages } from 'packages/ui/src/components/common';
import { useEffect, useState } from 'react';
import CompanyForm from './todo.list.form';
import { TodoSharedService } from '@trackx/shared-services';

const CompanyGrid = () => {
    const [companyFormData, setCompanyFormData] = useState([]);
    const [openCompanyFormDrawer, setOpenCompanyFormDrawer] = useState(false);
    const [formRef] = Form.useForm();
    const [initialValues, setInitialValues] = useState({});
    const [companyList, setCompanyList] = useState<any[]>([]);
    const service = new TodoSharedService();
    const { IAMClientAuthContext } = useIAMClientState();
    const id = localStorage.getItem("userId");
    const roles = localStorage.getItem(id).split(',');
    console.log(id, roles, "LLLLLLLLLLLLLLLLLLL", roles)
    const [visible, setVisible] = useState(false);

    function handleOk() {
        window.location.href = "/";
    }

    function handleCancel() {
        setVisible(false);
    }

    const openServiceFormInDrawer = () => {
        setInitialValues({});
        setOpenCompanyFormDrawer(true);
    };

    const editCompanyData = (record: any) => {
        setInitialValues(record);
        setOpenCompanyFormDrawer(true);
    };

    useEffect(() => {
        getTodo();
        const interval = setInterval(() => {
            getTodo();
        }, 10000); 

        return () => clearInterval(interval); 
    }, []);

    const todolistDel = (todoData: any) => {
        todoData.isActive = !todoData.isActive;
        service
            .activateOrDeactivateTodo(todoData)
            .then((res) => {
                if (res.status) {
                    getTodo();
                    message.success(res.internalMessage);
                } else {
                    message.error(res.internalMessage);
                }
            })
            .catch((err) => {
                AlertMessages.getErrorMessage(err.message);
            });
    };

    const getTodo = () => {
        service.getTodo()
            .then(res => {
                if (res.status) {
                    setCompanyList(res.data);
                } else {
                    AlertMessages.getErrorMessage(res.internalMessage);
                }
            }).catch(err => console.log(err.message));
    };

    const drawerOnClose = () => {
        setOpenCompanyFormDrawer(false);
        formRef.resetFields();
    };

    const columns = [
        {
            title: 'Task',
            dataIndex: 'task',
            key: 'task'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'action',
            render: (_, record) => (
                <>
                    <EditFilled
                        onClick={() => editCompanyData(record)} 
                        style={{ fontSize: '20px', color: '#08c', display: !roles.includes('create') ? 'none' : '' }} 
                    />
                    <Divider type="vertical" />
                    <Popconfirm
                        onConfirm={() => todolistDel(record)}
                        title={
                            record.isActive
                                ? "Are you sure to Deactivate Task?"
                                : "Are you sure to Activate Task?"
                        }
                    >
                        <Switch
                            style={{ display: !roles.includes('create') ? 'none' : '' }}
                            size="default"
                            className={
                                record.isActive ? "toggle-activated" : "toggle-deactivated"
                            }
                            checkedChildren={<RightSquareOutlined type="check" />}
                            unCheckedChildren={<RightSquareOutlined type="close" />}
                            checked={record.isActive}
                        />
                    </Popconfirm>
                </>
            )
        }
    ];

    return (
        <>
            <Card
                title='Tasks'
                extra={
                    <div>
                        <Button
                            onClick={openServiceFormInDrawer}
                            disabled={!roles.includes('create')}
                        >
                            Create
                        </Button>
                        <Button onClick={() => {
                            setVisible(true);
                        }}>
                            Logout
                        </Button>
                        <Modal
                            title="Confirm Logout"
                            visible={visible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <p>Are you sure you want to log out?</p>
                        </Modal>
                    </div>
                }
            >
                <Table
                    columns={columns}
                    dataSource={companyList}
                    bordered
                />
            </Card>

            <Drawer
                title="Company"
                width={550}
                open={openCompanyFormDrawer}
                onClose={drawerOnClose}
            >
                <CompanyForm
                    initialValues={initialValues}
                    formRef={formRef}
                    drawerOnClose={drawerOnClose}
                />
            </Drawer>
        </>
    );
};

export default CompanyGrid;
