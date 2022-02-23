tree-shaking：
在import收集依赖
执行后面代码，引用的再引入
逆向引入

rollup四件套：手术刀、编译器、walk函数、scope作用域
一般的编译过程都是三步走：parse（解析成抽象语法树）、transform（转换，这个阶段是最难的阶段，可以做任何替换处理）、generate（生成处理之后的代码）