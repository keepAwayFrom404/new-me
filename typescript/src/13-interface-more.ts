// 接口：约束对象的结构
export {}

interface Post {
  title: string
  content: string
  subTitle?: string
  readonly summary: string
}

const hello: Post = {
  title: 'hello',
  content: 'typescript',
  summary: 'a javascript'
}

console.log(hello)

interface Cache {
  
}