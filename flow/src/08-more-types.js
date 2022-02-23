/**
 * 特殊类型
 * @flow 
 */

// 字面量类型
const a: 'foo' = 'foo'

// 联合类型
const type: 'success' | 'warning' | 'danger' = 'danger'

type StringOrNumber = string | number

const b: StringOrNumber = 'string' // 100

// maybe
const gender: ?number = null // ?number等价于number | null |

