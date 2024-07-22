import { TodoSharedService } from '@trackx/shared-services';
import { Button, Col, Form, Input, Row, message } from 'antd';
import { FormInstance } from 'antd/lib';
import { AlertMessages } from 'packages/ui/src/components/common';
import React, { useEffect } from 'react';

interface CompanyIProps {
  initialValues: any;
  formRef: FormInstance<any>;
  drawerOnClose: () => void;
}

const CompanyForm: React.FC<CompanyIProps> = ({ initialValues, formRef, drawerOnClose }) => {
  const service = new TodoSharedService();
  const [form] = Form.useForm()
  const id = localStorage.getItem("userId");
  const roles = localStorage.getItem(id);

  console.log(id, roles, "LLLLLLLLLLLLLLLLLLL")
  useEffect(() => {
    if (initialValues) {
      formRef.setFieldsValue(initialValues);
    }
  });

  const TaskCreate = () => {
    formRef.validateFields()
      .then(values => {

        service.createTodo(values)
          .then(response => {
            if (response.status) {
              AlertMessages.getSuccessMessage(response.internalMessage);
              drawerOnClose();
            } else {
              AlertMessages.getErrorMessage(response.internalMessage);
            }
          }).catch(err => console.log(err.message));
      })
      .catch(err => console.log(err.message));
  };






  return (
    <Form
      form={formRef}
    >
      <Form.Item name={"id"} hidden >
        <Input />
      </Form.Item>

      <Row>
        <Col span={16} offset={1}>
          <Form.Item label="Task" name="task" wrapperCol={{ span: 30 }}>
            <Input placeholder='Please enter task' />
          </Form.Item>
        </Col>
        <Col span={16} offset={1}>
          <Form.Item label="Description" name="description" wrapperCol={{ span: 30 }}>
            <Input placeholder='Please Enter Description' />
          </Form.Item>
        </Col>



        <Col span={2} offset={2}>
          <Form.Item label={' '}>
            <Button type='primary' onClick={TaskCreate}>
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default CompanyForm;
