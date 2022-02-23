// 枚举：罗列可枚举值，打包之后会侵入代码（生成双向取值的对象），可以使用 const前缀声明常量枚举；字符串枚举所有枚举值都需要定义

enum PostStatus {
  Draft,
  UnPublish,
  Publish,
}

const enum ConstPostStatus {
  Draft,
  UnPublish,
  Publish,
}

const post = {
  status: PostStatus.Draft
}

const post2 = {
  status: ConstPostStatus.Draft
}



console.log(post.status)