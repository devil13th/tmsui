import React from 'react'
import {
  Form,
  Input,
  Select,
  Option,
  Button,
  Divider,
  InputNumber,
  DatePicker,
  message,
} from 'antd'
import transfer from '@/utils/transfer'
class CgTestForm extends React.Component {
  state = {}
  formRef = React.createRef()
  componentDidMount() {}

  // 保存数据
  save = () => {
    const v = this.formRef.current.getFieldsValue()
    const r = transfer.formatObjectForMomentAttr(v)
    console.log('record:', r)

    fetch(`/api/cgTest/insertCgTest`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(r),
    })
      .then(function (obj) {
        return obj.json()
      })
      .then(function (r) {
        if (r.code === '0') {
          message.info('SUCCESS')
        } else {
          message.error(r.msg)
        }
      })
      .catch(function (e) {
        message.error('ERROR')
      })
      .finally(function () {})
  }

  // 加载数据
  load = () => {
    this.formRef.current.setFieldsValue({
      userId: 'aaa',
      userName: 'bbb',
      userAge: 3,
      userBirthday: '2020-10-30',
    })
  }

  render() {
    const { Option } = Select
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    }
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    }
    return (
      <div>
        <Form
          {...layout}
          ref={this.formRef}
          name="control-ref"
          onFinish={this.onFinish}
        >
          <Form.Item name="userId" label="UserId" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="userName"
            label="UserName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="userAge"
            label="UserAge"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="userBirthday"
            label="UserBirthday"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
        </Form>
        <Divider />

        <Button type="primary" onClick={this.save}>
          Save
        </Button>
        <Button htmlType="button" onClick={this.load}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={this.onFill}>
          Fill form
        </Button>
      </div>
    )
  }
}

export default CgTestForm
