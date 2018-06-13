/* var callbacks = []
for(var i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2; }
}

console.table([
  callbacks[0](),
  callbacks[1](),
  callbacks[2]()
]) */

let callbacks = [];
for(let i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2; };
}

/* console.table([
  callbacks[0](),
  callbacks[1](),
  callbacks[2]()
]) */


/**
 * 在使用var声明时具有变量提升的效果，所以是全局环境下他不会记录每次循环的结果而是最后一次遍历；
 * 在块级作用域中每次执行函数时都会重新绑定到当前作用域内从而达到隔离的效果；
 */