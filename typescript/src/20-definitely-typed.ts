// 类型声明: 一个成员在定义的时候没有声明明确的类型，在使用中可以去进行声明，为了兼容一些普通的js模块
export {}

import { camelCase } from 'lodash'

import qs from 'query-string'

qs.parse('?key=value&key2=value2')

// declare function camelCase(input: string): string

const res = camelCase('hello typed')