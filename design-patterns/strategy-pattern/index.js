// 各规则对应的策略类
const perforanceS = function() {}

perforanceS.prototype.calulate = function(salary) {
  return salary * 4
}

const perforanceA = function() {}

perforanceA.prototype.calulate = function(salary) {
  return salary * 3
}

const perforanceB = function() {}

perforanceB.prototype.calulate = function(salary) {
  return salary * 2
}
// 定义环境类
const Bonus = function() {
  this.salary = null
  this.strategy = null
}

Bonus.prototype.setSalary = function(salary) { // 设置初始工资
  this.salary = salary
}

Bonus.prototype.setStrategy = function(strategy) { // 设置等级对应的策略
  this.strategy = strategy
}

Bonus.prototype.getBouns = function() {
  if(!this.strategy) {
    throw new Error('未设置策略属性')
  }
  return this.strategy.calulate(this.salary)
}

// 使用
const bonus = new Bonus()

bonus.setSalary(23000)
bonus.setStrategy(new perforanceS())
console.log(bonus.getBouns());
bonus.setStrategy(new perforanceA())
console.log(bonus.getBouns());
bonus.setStrategy(new perforanceB())
console.log(bonus.getBouns());

// js版本
const strategies = {
  'S': function(salary) {
    return salary * 4
  },
  'A': function(salary) {
    return salary * 3
  },
  'B': function(salary) {
    return salary * 2
  },
}

const calculateBouns = function(level, salary) {
  return strategies[level](salary)
}

console.log(calculateBouns('S', 23000));