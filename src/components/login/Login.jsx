import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { withRouter } from 'react-router-dom'

import tran from '@/utils/transfer'

class Login extends React.Component {
  state = {
    layout: {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    tailLayout: {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    loginInfo: {
      usr: 'usr',
      pwd: 'pwd',
      vcode: '',
    },
  }

  formRef = React.createRef()

  onFinish = (values) => {
    const _this = this
    fetch(`/api/login?${tran.objToUrl(values)}`, {
      method: 'get',
      headers: {},
    })
      .then(function (obj) {
        return obj.json()
      })
      .then(function (r) {
        console.log(r)
        _this.props.history.push('/CgTest/CgTestList')
      })

    console.log('Received values of form: ', values)
  }

  render() {
    return (
      <div id="components-form-demo-normal-login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="credential"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default withRouter(Login)
