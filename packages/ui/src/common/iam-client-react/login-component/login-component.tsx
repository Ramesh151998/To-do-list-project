import { LaptopOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginService } from '@trackx/shared-services';
import { Button, Card, Col, Form, Input, Modal, Row } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState<any>(false);
  const [newdata, setNewdata] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState<any>(false);
  const [editingData, setEditingData] = useState<any>(null);
  const [pswOpen, setPswOpen] = useState<any>(false);

  const service = new LoginService();

  // const PswClose = () => {
  //   setPswOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  //   setNewdata(null);
  // };

  // const handleOk = () => {
  //   if (newdata.username == null || newdata.password == null) {
  //     alert("Please fill all fields...");
  //   } else {
  //     axios.post("http://localhost:5000/auth/postdata", {
  //       username: newdata.username,
  //       password: newdata.password,
  //     }).then((res) => {
  //       if (res.data === false) {
  //         alert("Username already existed!");
  //       } else {
  //         alert("Registered Successfully..");
  //         setIsModalOpen(false);
  //         setNewdata(null); 
  //       }
  //     });
  //   }
  // };

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
    if (newdata.username == null || newdata.password == null) {
      alert("Please fill all fields...")
    }
    else {
      axios.post("http://localhost:5004/auth/createUser", {
        username: newdata.username,
        password: newdata.password
      })
        .then((res) => {
          if (res.data === false) {
            alert("Username already existed!")
          }
          else {
            alert("Registered Successfully..")
            setIsModalOpen(false)
            setNewdata(null)
          }
        })
    }
  }

  const PswClose = () => {
    setPswOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setNewdata(null)
  }

  const pswOk = () => {
    if (editingData.newPassword === editingData.confirmPassword) {
      axios.patch("http://localhost:5004/auth/editdata", {
        username: editingData.username,
        password: editingData.newPassword,
      }).then((res) => {
        if (res.data === true) {
          alert("Password changed");
          setPswOpen(false);
          setEditingData(null);
          form1.resetFields();
        } else {
          alert("User not found");
        }
      });
    } else {
      alert("Password and confirm password must be the same");
    }
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
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
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
          <Form>
            <Form.Item label="Username">
              <Input
                placeholder='Username'
                prefix={<UserOutlined />}
                value={newdata?.username}
                onChange={(e: any) => {
                  setNewdata((prev: any) => ({
                    ...prev,
                    username: e.target.value,
                  }));
                }}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password
                placeholder='Password'
                prefix={<LockOutlined />}
                value={newdata?.password}
                onChange={(e: any) => {
                  setNewdata((prev: any) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
            </Form.Item>
          </Form>
        </Modal>
        <Modal title="Reset Password" open={pswOpen} onOk={pswOk} onCancel={PswClose}>
          <Form>
            <Form.Item label="Username">
              <Input
                prefix={<UserOutlined />}
                placeholder='Username'
                value={editingData?.username}
                onChange={(e: any) => {
                  setEditingData((prev: any) => ({
                    ...prev,
                    username: e.target.value,
                  }));
                }} 
              />
            </Form.Item>
            <Form.Item label="New Password" name="newPassword" hasFeedback>
              <Input.Password
                prefix={<LockOutlined />}
                placeholder='New password'
                value={editingData?.newPassword}
                onChange={(e: any) => {
                  setEditingData((prev: any) => ({
                    ...prev,
                    newPassword: e.target.value,
                  }));
                }}
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Password doesn't match");
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder='Confirm password'
                value={editingData?.confirmPassword}
                onChange={(e: any) => {
                  setEditingData((prev: any) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }));
                }}
              />
            </Form.Item>
          </Form>
        </Modal>
      </header>
    </div>
  );
};

export default LoginComponent;
