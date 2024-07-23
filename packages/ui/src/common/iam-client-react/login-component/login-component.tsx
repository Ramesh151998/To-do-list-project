import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginService } from '@trackx/shared-services';
import { Button, Card, Checkbox, Col, Form, Input, Modal, Row } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState<any>(false);
  const [newdata, setNewdata] = useState<any>({ username: '', password: '', todos: [] });
  const [isModalOpen, setIsModalOpen] = useState<any>(false);
  const [editingData, setEditingData] = useState<any>(null);
  const [pswOpen, setPswOpen] = useState<any>(false);
  const [data, setData] = useState({ username: '', password: '', todos: [] });

  const service = new LoginService();

  const onFinish = async (data: any) => {
    setIsAuth(true);
    try {
      const res = await service.findUser(data);
      if (res.status) {
        localStorage.setItem(res.data.todos[0].id, res.data.todos[0].permission);
        localStorage.setItem('userId', res.data.todos[0].id);
        navigate('/navpage');
      } else {
        alert("Wrong credentials!");
      }
    } catch (error) {
      alert("An error occurred: " + (error.response ? error.response.data.message : error.message));
    } finally {
      form.resetFields();
    }
  };

  const handleOk = () => {
    if (newdata.username === '' || newdata.password === '') {
      alert("Please fill all fields...");
    } else {
      axios.post("http://localhost:5004/auth/createUser", newdata)
        .then((res) => {
          if (res.data === false) {
            alert("Username already existed!");
          } else {
            alert("Registered Successfully..");
            setIsModalOpen(false);
            setNewdata({ username: '', password: '', todos: [] });
            form1.resetFields();
          }
        });
    }
  };

  const handleChange = (changedValues, allValues) => {
    setNewdata(allValues);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setNewdata({ username: '', password: '', todos: [] });
    form1.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='App' style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <header className='App-header'>
        <Card
          title={<span style={{ color: 'white', textAlign: 'center' }}>LOGIN FORM</span>}
          style={{ width: '300px', textAlign: 'center' }}
          headStyle={{ backgroundColor: '#1ad1ff', border: 0 }}
        >
          <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder='Username'
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder='Password'
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" style={{ marginRight: '30%' }}>
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <Row justify="space-between">
                <Col>
                  <Button type='link' onClick={() => setIsModalOpen(true)}> New Login</Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Card>
        <Modal title="New Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
            form={form1}
            onValuesChange={handleChange}
            initialValues={{ username: '', password: '', todos: [] }}
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input
                placeholder='Username'
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                placeholder='Password'
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item label="Actions" name="todos">
              <Checkbox.Group>
                <Checkbox value="create">Create</Checkbox>
                <Checkbox value="read">Read</Checkbox>
                <Checkbox value="update">Update</Checkbox>
                <Checkbox value="delete">Delete</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Form>
        </Modal>
      </header>
    </div>
  );
};

export default LoginComponent;
