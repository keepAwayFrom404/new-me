import React, { useState, useEffect } from 'react';
import XLSX from 'xlsx'
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const reconciliationType = {
  '补打款': 1,
  '补扣款': 2,
}
function readExcel(file) {
    return new Promise(function(resolve, reject){// 返回Promise对象
      const reader = new FileReader();
      reader.onload = (e) => {// 异步执行
        try {
          // 以二进制流方式读取得到整份excel表格对象
          let data = e.target.result,workbook = XLSX.read(data, {type: 'binary'});
          const result = [];
          const errArr = []
          for (let item of Object.keys(workbook.SheetNames)){
            let SheetName = workbook.SheetNames[item]
            let sheetInfos = workbook.Sheets[SheetName];
            let curSheetData = []
            let outdata = XLSX.utils.sheet_to_json(sheetInfos);
            outdata.map((v, row) => {
              let obj = {}
              obj.orderId = v.订单id
              obj.type = v.调账类型
              obj.remark = v.备注
              obj.reason = v.调账原因
              obj.money = v['调账金额（元）']
              
              for (let col = 0; col < Object.entries(obj).length; col++) {
                const [key, itemVal] = Object.entries(obj)[col];
                // console.log(key, itemVal, 'key, itemVal ====>');
                switch (key) {
                  case 'orderId':
                    if(String(itemVal.length !== 19) && String(itemVal.length !== 27)) {
                      errArr.push({
                        row: row + 2,
                        col: col + 1
                      })
                    }
                    break;
                  case 'type':
                    if(reconciliationType[obj[key]]) {
                      obj[key] = reconciliationType[obj[key]]
                    } else {
                      errArr.push({
                        row: row + 2,
                        col: col + 1
                      })
                    }
                    break;
                }
                
              }
              curSheetData.push(obj)
            })
            result.push({
              sheetName: SheetName,
              sheet: curSheetData
            });
          }
          if(errArr.length) reject(errArr)
          else resolve(result);
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
  // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
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
    .catch(err => {
      console.log(err, '========>');
    })
  }
};

function App() {
  let [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return ( 
    <div className="App">
      <h1>hello react!</h1>
      <p>You clicked { count } times</p>
      <button onClick={() => setCount(count+1)}>click me</button>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
   );
}
 
export default App;