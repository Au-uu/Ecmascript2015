/**
 * 对象扩展
 *    函数新增特性
 *      简介表示法  属性表达式  扩展运算符  Object新增方法
 */

 {
   let o = 1;
   let k = 2;

    let mixin = {
      o,
      k
    };
 }

 {
   // 属性表达式
   let a = 'b';
   let es5_obj = {
     a: 'c'
   };

   let es6_obj = {
     [a]: 'c'
   };

   console.log(es5_obj,es6_obj)
 }

 {
   // 新增Api
   console.log('字符串', Object.is('abc','abc'), 'abc'==='abc');
   console.log('数组', Object.is([],[]),[]===[]);
   console.log('拷贝', Object.assign({a: 'a'},{b:'b'}));

   let test = {k:123,o:456};
   for(let [key,value] of Object.entries(test)) {
     console.log([key,value]);
   }
 }

 {
   // 扩展运算符
   let {a,b,...c} = {a: 'test',b: 'kill', c:'ddd',d:'ccc'};
 }