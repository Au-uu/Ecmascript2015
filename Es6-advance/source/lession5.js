/**
 * 数值扩展
 *    数值处理新增特性
 *        1.新增方法
 *        2.方法调整
 */

 {
   console.log('B', 0B111110111);
   console.log(0o767);
 }

 {
   console.log('15',Number.isFinite(15));
   console.log('NaN',Number.isFinite(NaN));
   console.log('1/0',Number.isFinite(1/0));
   console.log('NaN',Number.isNaN(1));
 }

 {
   console.log('77', Number.isInteger(77));
   console.log('77.7', Number.isInteger(77.7));
   console.log('77.7', Number.isInteger('77.7'));
 }

 {
   console.log(4.1,Math.trunc(4.1)); // 取整
   console.log(4.9,Math.trunc(4.9)); // 取整
 }

 {
   // 判断正数、负数、零
   console.log('-5',Math.sign(-5));
   console.log('0',Math.sign(0));
   console.log('5',Math.sign(5));
   console.log('50',Math.sign('50'));
   console.log('NaN',Math.sign('NaN'));
 }

 {
   // 立方根
   console.log(Math.cbrt(-1));
 }