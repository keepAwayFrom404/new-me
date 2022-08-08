# egg-learn

egg基础学习

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

## 日常controller分类
1. html类型：页面返回
2. resetful：通过参数操作数据库
3. 代理

## service
- 保持controller逻辑更加简单
- 独立，可供多个controller调用
- 测试用例简单

## get
### 传参模式
1. 自由传递，使用query接收无限制
1. 固定传递，使用params接收

## egg有关键字
比如service定义的方法找不到