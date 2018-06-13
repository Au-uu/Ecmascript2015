/**
 * 函数扩展
 *    函数新增特性
 *      参数默认值 rest参数 扩展运算符 箭头函数 this绑定 尾调用
 */

 {
   function test(x,y='world') {
     console.log('默认值', x,y);
   }
   test('Hi')
 }

 {
   let x = 'test';
   function test2(x,y=x) {
     console.log('作用域',x,y);
   }
   test2('hehe');
 }

 {
   // 在不确定参数的时候将所有形参转化为数组
   function test3(...arg) {
     for(let v of arg) {
       console.log('rest', v);
     }
   }
   test3(1,2,3);
 }

 {
   console.log(...[1,2,3,5]);
   console.log('a',...[1,2,3,5]);
 }

 {
   // 尾调用 性能优化
   function tail(x) {
     console.log('tail', x);
   }

   function fx(x) {
     return tail(x);
   }
   fx(123);
 }