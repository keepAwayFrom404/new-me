{
  raws: { before: '\n  ', between: ': ' },
  type: 'decl',
  parent: Rule {
    raws: { before: '', between: ' ', semicolon: true, after: '\n' },
    type: 'rule',
    nodes: [ [Circular *1] ],
    parent: Root {
      raws: [Object],
      type: 'root',
      nodes: [Array],
      source: [Object],
      lastEach: 1,
      indexes: [Object],
      [Symbol(isClean)]: false,
      [Symbol(my)]: true
    },
    source: { start: [Object], input: [Input], end: [Object] },
    selector: 'body',
    lastEach: 1,
    indexes: { '1': 0 },
    [Symbol(isClean)]: false,
    [Symbol(my)]: true
  },
  source: {
    start: { offset: 9, line: 2, column: 3 },
    input: Input {
      css: 'body {\n  font-size: 40px;\n}',
      hasBOM: false,
      file: '/Users/didi/new-me/postcss-learn/src/color.css',
      [Symbol(fromOffsetCache)]: [Array]
    },
    end: { offset: 24, line: 2, column: 18 }
  },
  prop: 'font-size',
  value: '40px',
  [Symbol(isClean)]: false,
  [Symbol(my)]: true
}