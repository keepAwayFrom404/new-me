const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'ljh1022,',
  database: 'my_db_01'
})

// db.query('select 1', (err, result) => {
//   if(err) return console.log(err)
//   console.log(result)
// })
// const qsStr = 'select * from users;'
// db.query(qsStr, (err, result) => {
//   if(err) return console.log(err)
//   console.log(result)
// })

const user = {name: 'cadenli', password: 'ljh1022,'}
const insertSqlStr = 'insert into users (username, password) values (?, ?)'
db.query(insertSqlStr,[user.name, user.password], (err, result) => {
  if(err) return console.log(err)
  if(result.affectedRows === 1) console.log('插入数据成功！')
})

