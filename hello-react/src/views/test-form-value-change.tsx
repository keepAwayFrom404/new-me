import React, { useEffect } from "react";
import { Form, Select } from "antd";
const App = (props) => {
  const { form } = props;
  const { getFieldDecorator, setFieldsValue } = form;
  const handleCurrencyChange = (v) => {
    console.log(v, "handleCurrencyChange ===>");
  };

  useEffect(() => {
    setTimeout(() => {
      setFieldsValue({price: 'dollar'})
    }, 5000);
  }, [])
  
  return (
    <Form>
      <Form.Item label="Price">
        {getFieldDecorator("price", {
          initialValue: "rmb",
        })(
          <Select style={{ width: "32%" }} onChange={handleCurrencyChange}>
            <Select.Option value="rmb">RMB</Select.Option>
            <Select.Option value="dollar">Dollar</Select.Option>
          </Select>
        )}
      </Form.Item>
    </Form>
  );
};
export default Form.create()(App);
