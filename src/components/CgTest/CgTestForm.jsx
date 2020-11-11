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

import {
  SaveOutlined,
  ClearOutlined,
  RedoOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import moment from 'moment'
import transfer from '@/utils/transfer'
import utils from '@/utils/utils'
class CgTestForm extends React.Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
    this.state = {}
  }

  formRef = React.createRef()

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, nextProps)
    return this.props.id !== nextProps.id
  }

  componentDidMount() {
    if (this.props.id) {
      this.load(this.props.id)
    } else {
      this.reset()
    }
  }

  // 保存数据
  async save() {
    try {
      const validateResult = await this.formRef.current.validateFields()
      console.log('validate success', validateResult)

      const v = this.formRef.current.getFieldsValue()
      const r = transfer.formatObjectForMomentAttr(v)
      console.log('record:', r)
      const _this = this
      if (this.props.id) {
        utils.HttpUtil.put(`/api/cgTest/updateCgTest`, r).then(function (r) {
          _this.props.saveSuccessCb(v)
        })
      } else {
        utils.HttpUtil.post(`/api/cgTest/insertCgTest`, r).then(function (r) {
          _this.props.saveSuccessCb(v)
        })
      }
    } catch (e) {
      message.error('请按照要求修改')
      console.log('validate error', e)
    }
  }
  reset = () => {
    this.formRef.current.resetFields()
  }
  // 加载数据
  load = (id) => {
    const _this = this
    utils.HttpUtil.get(`/api/cgTest/queryCgTestById/${id}`).then(function (r) {
      const data = r.result
      if (data && data.userBirthday) {
        data.userBirthday = utils.Transfer.timestampToMoment(data.userBirthday)
      }
      _this.formRef.current.resetFields()
      _this.formRef.current.setFieldsValue(data)
    })
  }

  onFill = () => {
    alert(utils.Transfer.momentToTimestamp(moment()))
    alert(utils.Transfer.momentToDate(moment()))
    alert(utils.Transfer.timestampToDate(1602576572000))
    alert(utils.Transfer.timestampToDate(1602576572000))
  }

  render() {
    const { Option } = Select
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
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
          <Form.Item shouldUpdate={true} name="userId" label="UserId">
            <Input />
          </Form.Item>
          <Form.Item
            shouldUpdate={true}
            {...layout}
            name="userName"
            label="UserName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            shouldUpdate={true}
            name="userAge"
            label="UserAge"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            shouldUpdate={true}
            name="userBirthday"
            label="UserBirthday"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
        </Form>
        <Divider />
        <div style={{ textAlign: 'right' }}>
          <Button type="primary" icon={<SaveOutlined />} onClick={this.save}>
            Save
          </Button>
          <Divider type="vertical"></Divider>
          <Button
            htmlType="button"
            icon={<ClearOutlined />}
            onClick={this.reset}
          >
            Clear
          </Button>
          <Divider type="vertical"></Divider>
          <Button
            htmlType="button"
            icon={<CloseOutlined />}
            onClick={this.props.onClose}
          >
            Close
          </Button>
          {/* <Button type="link" htmlType="button" onClick={this.onFill}>
            Fill form
          </Button> */}
        </div>
      </div>
    )
  }
}

export default CgTestForm
