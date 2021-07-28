import React, { Component } from 'react';
import './App.css'
import 'antd/dist/antd.css';
import XLSX from 'xlsx'
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
function readExcel(file) {
    return new Promise(function(resolve, reject){// 返回Promise对象
      const reader = new FileReader();
      reader.onload = (e) => {// 异步执行
        try {
          // 以二进制流方式读取得到整份excel表格对象
          let data = e.target.result,workbook = XLSX.read(data, {type: 'binary'});
          const result = [];
          for (let item in workbook.SheetNames){
            let SheetName = workbook.SheetNames[item]
            let sheetInfos = workbook.Sheets[SheetName];
            let arr = []
            let outdata = XLSX.utils.sheet_to_json(sheetInfos);
            outdata.map(v => {
              let obj = {}
              obj.remark = v.备注
              obj.orderId = v.订单id
              obj.reason = v.调账原因
              obj.type = v.调账类型
              obj.money = v['调账金额（元）']
              arr.push(obj)
            })
            result.push({
              sheetName: SheetName,
              sheet: arr
            });
          }
          resolve(result);
        } catch (e) {
          console.log(e, 'e ====>');
          reject(e.message);
        }
      };
      reader.readAsBinaryString(file);
    });
}
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  maxCount: 1,
  accept: '.xlsx,.csv',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      // console.log(XLSX.utils.sheet_to_json(info.file), 'file ===>');
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  beforeUpload(file) {
    readExcel(file).then(data => {
      console.log(data, 'promise ====>');
    })
    return false
  }
};

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <h1>hello react!!</h1>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
     );
  }
}
 
export default App;