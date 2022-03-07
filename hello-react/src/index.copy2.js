import React, { memo,useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Steps, Button, message,Form,
  Input,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  AutoComplete,
  Checkbox,
  Row,
  Col,
  Switch, } from 'antd';
import RenderProps from './views/render-props'
import PureComponent from './views/pure-component'
import ModalTest from './views/modal-test'
import Keyboard from './views/number-keyboard'
import ExportExcel from './views/export-excel'
import TestRadio from './views/test-radio'
import './index.css';
import 'antd/dist/antd.css'
import moment from 'moment'
import './index.less'
import { useFormatList } from './hooks/useFormatList';

const Child = memo(({data}) =>{
  console.log('child render...', data)
  const [name, setName] = useState(data)
  return (
      <div>
          <div>child</div>
          <div>{name} --- {data}</div>
      </div>
  );
})
const { Step } = Steps;

const steps = [
  {
    title: '开始填写',
    content: 'First-content',
  },
  {
    title: '即将胜利',
    content: 'Second-content',
  },
  {
    title: '完成啦～',
    content: 'Last-content',
  },
];
const Index = ({list}) => {
  const [number, setNumber] = useState(0);
  const newList = useFormatList(list)
  return <div>
  <div className="list" >
     { newList.map(item=><div key={item} >{ item }</div>) }
   </div>
   <div className="number" >
       <div>{ number }</div>
       <button onClick={()=> setNumber(number + 1) } >add</button>
   </div>
</div>
}
const App = () => {
  // const [current, setCurrent] = React.useState(0);

  // const next = () => {
  //   setCurrent(current + 1);
  // };

  // const prev = () => {
  //   setCurrent(current - 1);
  // };
  // const residences = [
  //   {
  //     value: 'zhejiang',
  //     label: 'Zhejiang',
  //     children: [
  //       {
  //         value: 'hangzhou',
  //         label: 'Hangzhou',
  //         children: [
  //           {
  //             value: 'xihu',
  //             label: 'West Lake',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     value: 'jiangsu',
  //     label: 'Jiangsu',
  //     children: [
  //       {
  //         value: 'nanjing',
  //         label: 'Nanjing',
  //         children: [
  //           {
  //             value: 'zhonghuamen',
  //             label: 'Zhong Hua Men',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const mockData = () => {
    return new Promise(res => {
      setTimeout(() => {
        res(123)
      }, 20000);
    })
  }

  useEffect(async () => {
    // .then(res => console.log(res))
    const data = await mockData()
    console.log(data, 'data====>');
  })

  return (
    <Index list={[ 'aaa' , 'bbb' , 'ccc'  ]} />
    // <div style={{margin: '20px'}}>
    //   {/* <Steps current={current}>
    //     {steps.map(item => (
    //       <Step key={item.title} title={item.title} />
    //     ))}
    //   </Steps> */}
    //   <div className="steps-content">
    //   <Form
    //   style={{padding: '10px'}}
    //   // labelCol={{ span: 4 }}
    //   // wrapperCol={{ span: 14 }}
    //   layout="horizontal"
    //   // initialValues={{ size: componentSize }}
    //   // onValuesChange={onFormLayoutChange}
    //   // size={componentSize as SizeType}
    // >
    //   <Form.Item
    //     name="email"
    //     label="E-mail"
    //     rules={[
    //       {
    //         type: 'email',
    //         message: 'The input is not valid E-mail!',
    //       },
    //       {
    //         required: true,
    //         message: 'Please input your E-mail!',
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>

    //   <Form.Item
    //     name="password"
    //     label="Password"
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please input your password!',
    //       },
    //     ]}
    //     hasFeedback
    //   >
    //     <Input.Password />
    //   </Form.Item>

    //   <Form.Item
    //     name="confirm"
    //     label="Confirm Password"
    //     dependencies={['password']}
    //     hasFeedback
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please confirm your password!',
    //       },
    //       ({ getFieldValue }) => ({
    //         validator(_, value) {
    //           if (!value || getFieldValue('password') === value) {
    //             return Promise.resolve();
    //           }
    //           return Promise.reject(new Error('The two passwords that you entered do not match!'));
    //         },
    //       }),
    //     ]}
    //   >
    //     <Input.Password />
    //   </Form.Item>

    //   <Form.Item
    //     name="nickname"
    //     label="Nickname"
    //     tooltip="What do you want others to call you?"
    //     rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
    //   >
    //     <Input />
    //   </Form.Item>

    //   <Form.Item
    //     name="residence"
    //     label="Habitual Residence"
    //     rules={[
    //       { type: 'array', required: true, message: 'Please select your habitual residence!' },
    //     ]}
    //   >
    //     <Cascader options={residences} />
    //   </Form.Item>

    //   <Form.Item
    //     name="phone"
    //     label="Phone Number"
    //     rules={[{ required: true, message: 'Please input your phone number!' }]}
    //   >
    //     <Input style={{ width: '100%' }} />
    //   </Form.Item>

    //   <Form.Item
    //     name="donation"
    //     label="Donation"
    //     rules={[{ required: true, message: 'Please input donation amount!' }]}
    //   >
    //     <InputNumber style={{ width: '100%' }} />
    //   </Form.Item>

    //   <Form.Item
    //     name="website"
    //     label="Website"
    //     rules={[{ required: true, message: 'Please input website!' }]}
    //   >
    //     <AutoComplete options={[]}  placeholder="website">
    //       <Input />
    //     </AutoComplete>
    //   </Form.Item>

    //   <Form.Item
    //     name="intro"
    //     label="Intro"
    //     rules={[{ required: true, message: 'Please input Intro' }]}
    //   >
    //     <Input.TextArea showCount maxLength={100} />
    //   </Form.Item>

    //   <Form.Item
    //     name="gender"
    //     label="Gender"
    //     rules={[{ required: true, message: 'Please select gender!' }]}
    //   >
    //     <Select placeholder="select your gender">
    //       <Option value="male">Male</Option>
    //       <Option value="female">Female</Option>
    //       <Option value="other">Other</Option>
    //     </Select>
    //   </Form.Item>

    //   <Form.Item label="Captcha" extra="We must make sure that your are a human.">
    //     <Row gutter={8}>
    //       <Col span={12}>
    //         <Form.Item
    //           name="captcha"
    //           noStyle
    //           rules={[{ required: true, message: 'Please input the captcha you got!' }]}
    //         >
    //           <Input />
    //         </Form.Item>
    //       </Col>
    //       <Col span={12}>
    //         <Button>Get captcha</Button>
    //       </Col>
    //     </Row>
    //   </Form.Item>

    //   <Form.Item
    //     name="agreement"
    //     valuePropName="checked"
    //     rules={[
    //       {
    //         validator: (_, value) =>
    //           value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
    //       },
    //     ]}
    //   >
    //     <Checkbox>
    //       I have read the <a href="">agreement</a>
    //     </Checkbox>
    //   </Form.Item>
    //   <Form.Item >
    //     <Button type="primary" htmlType="submit">
    //       确认
    //     </Button>
    //   </Form.Item>
    // </Form>
    //   </div>
    //   {/* <div className="steps-action">
        
    //     {current === steps.length - 1 && (
    //       <Button type="primary" onClick={() => message.success('Processing complete!')}>
    //         完成
    //       </Button>
    //     )}
    //     {current > 0 && (
    //       <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
    //         上一步
    //       </Button>
    //     )}
    //     {current < steps.length - 1 && (
    //       <Button type="primary" onClick={() => next()}>
    //         下一步
    //       </Button>
    //     )}
    //   </div> */}
    // </div>
  );
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
