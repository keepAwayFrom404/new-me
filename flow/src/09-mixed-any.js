/**
 * Mixed Any
 * mixed为强类型，可接受任意类型值，any弱类型(主要为了兼容以前的老代码)
 * @flow
 */

// mixed
function passMixed(value: mixed) {
  if(typeof value === 'string') value.substr(1)
  
  if(typeof value === 'number') value * value
}

passMixed('string')

passMixed(100)

// any
function passAny(value: any) {
  value.substr(1)

  value * value
}

passAny('string')

passAny(100)