/**
 * Symbol
 *  Symbol的概念
 *  Symbol的作用
 * 
 *  提供一个独一无二的值
 */

 {
   // 声明
   let a1 = Symbol();
   let a2 = Symbol();
   console.log(a1===a2);
   let a3 = Symbol.for('a3');
   let a4 = Symbol.for('a3');
   console.log(a3===a4);
 }

 {
   let a1 = Symbol.for('abc');
   let obj = {
     [a1]: '123',
     'abc': 345,
     'c': 456 
   };
   console.log(obj);

// 普通遍历获取不到symbol的值需要一下属性
   Object.getOwnPropertySymbols(obj).forEach((item) => {
     console.log(obj[item]);
   });

   Reflect.ownKeys(obj).forEach((item) => {
     console.log('ownKeys',item,obj[item]);
   });
 }