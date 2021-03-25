var token = []
let start = char => {
  if(char === '1'
  || char === '2'
  || char === '3'
  || char === '4'
  || char === '5'
  || char === '6'
  || char === '7'
  || char === '8'
  || char === '9'
  || char === '0'
  ) {
    token.push(char)
    return inNumber
  }
  if(char === '+'
  || char === '-'
  || char === '*'
  || char === '/'
  ) {
    emmitToken(char, char)
    return start
  }
  if(char === ' ') {
    return start
  }
  if(char === '\r' || char === '\n') {
    return start
  }
}

const inNumber = char => {
  if(char === '1'
  || char === '2'
  || char === '3'
  || char === '4'
  || char === '5'
  || char === '6'
  || char === '7'
  || char === '8'
  || char === '9'
  || char === '0'
  ) {
    token.push(char)
    return inNumber
  } else {
    emmitToken('Number', token.join(''))
    token = []
    return start(char) 
  }
}

function emmitToken(type, value) {
  console.log(type+': '+value);
}
var input = '1024+2*256'
var state = start
for(var c of input.split('')) {
  state = state(c)
}

state(Symbol('EOF'))

function AdditiveExpression(source){
  if(source[0].type === 'MultiplicativeExpression') {
    let node = {
      type: 'AdditiveExpression',
      children: [source[0]]
    }
    source[0] = node
    return AdditiveExpression(source)
  }
  if(source[0].type === 'AdditiveExpression' && source[1] && source[1].type === '+') {
    let node = {
      type: 'AdditiveExpression',
      operator: '+',
      children: []
    }
    node.children.push(source.shift())
    node.children.push(source.shift())
    MultiplicativeExpression(source)
    node.children.push(source.shift())
    source.unshift(node)
    return AdditiveExpression(source)
  }
  if(source[0].type === 'AdditiveExpression' && source[1] && source[1].type === '-') {
    let node = {
      type: 'AdditiveExpression',
      operator: '-',
      children: []
    }
    node.children.push(source.shift())
    node.children.push(source.shift())
    MultiplicativeExpression(source)
    node.children.push(source.shift())
    source.unshift(node)
    return AdditiveExpression(source)
  }
  if(source[0].type === 'AdditiveExpression') return source[0]
  MultiplicativeExpression(source)
  return AdditiveExpression(source)
}
function MultiplicativeExpression(source) {
  if(source[0].type === 'Number') {
    let node = {
      type: 'MultiplicativeExpression',
      children: [source[0]]
    }
    source[0] = node
    return MultiplicativeExpression(source)
  }
  if(source[0].type === 'MultiplicativeExpression' && source[1] && source[1].type === '*') {
    let node = {
      type: 'MultiplicativeExpression',
      operator: '*',
      children: []
    }
    node.children.push(source.shift())
    node.children.push(source.shift())
    MultiplicativeExpression(source)
    node.children.push(source.shift())
    source.unshift(node)
    return MultiplicativeExpression(source)
  }
  if(source[0].type === 'MultiplicativeExpression' && source[1] && source[1].type === '/') {
    let node = {
      type: 'MultiplicativeExpression',
      operator: '/',
      children: []
    }
    node.children.push(source.shift())
    node.children.push(source.shift())
    MultiplicativeExpression(source)
    node.children.push(source.shift())
    source.unshift(node)
    return AdditiveExpression(source)
  }
  if(source[0].type === 'MultiplicativeExpression') return source[0]
  return MultiplicativeExpression(source)
}
function Expression(source) {
  if(source[0].type === 'AdditiveExpression' && source[1] && source[1].type === 'EOF') {
    let node = {
      type: 'Expression',
      children: [source.shift(),source.shift()]
    }
    source.unshift(node)
    return node
  }
  AdditiveExpression(source)
  return Expression(source)
}
function evalute(node) {
  if(node.type === 'Expression') {
    return evalute(node.children[0])
  }
  if(node.type === 'AdditiveExpression') {
    if(node.operator === '-') {
      return evalute(node.children[0] - node.children[2])
    }
    if(node.operator === '+') {
      return evalute(node.children[0] + node.children[2])
    }
    return evalute(node.children[0])
  }
  if(node.type === 'MultiplicativeExpression') {
    if(node.operator === '*') {
      return evalute(node.children[0] * node.children[2])
    }
    if(node.operator === '/') {
      return evalute(node.children[0] / node.children[2])
    }
    return evalute(node.children[0])
  }
  if(node.type === 'Number') {
    return Number(node.value)
  }
}