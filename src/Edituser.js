import React, { useState } from 'react';
import { Row, Col, Input, Select, Form, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { users } from './data';

const { Option } = Select;

const UserForm = () => {
  var userid = useParams().userid
  var user = users.filter((each)=>{
    return each.id == Number.parseInt(userid)
  })[0]
  console.log("user" , user)
  const [form] = Form.useForm();
  const [userData, setUserData] = useState(user);
  console.log(">>>>>>>>>" , userData)

  const handleInputChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const onFinish = () => {
    console.log('Form submitted:', userData);
  };

  return (
    <div className="centered-container">
      <div className="form-container">
        <h1>Edit Details</h1>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item label="First Name" name="firstname" rules={[{ required: true, message: 'Please enter your first name' }]}>
            <Input
              placeholder="First Name"
              value={userData.firstname}
              onChange={(e) => handleInputChange('firstname', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Last Name" name="lastname" rules={[{ required: true, message: 'Please enter your last name' }]}>
            <Input
              placeholder="Last Name"
              value={"lekhi"}
              onChange={(e) => handleInputChange('lastname', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <Input
              placeholder="Email"
              value={userData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Experience" name="exp">
            <Input
              placeholder="Experience"
              value={userData.exp}
              onChange={(e) => handleInputChange('exp', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Please select your gender' }]}>
            <Select
              placeholder="Gender"
              value={userData.gender}
              onChange={(value) => handleInputChange('gender', value)}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Age" name="age">
            <Input
              placeholder="Age"
              type="number"
              value={userData.age}
              onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
            />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input
              placeholder="Phone"
              value={userData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
