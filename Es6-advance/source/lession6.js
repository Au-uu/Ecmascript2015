/**
 * 数组扩展
 *  数组新增特性
 *    Array.from Array.of copyWithin find\findIndex fill entries\keys\values includes
 */

 {
   // 将指定集合转换成数组
   let arr = Array.of(3,4,5,7,9);
   console.log('arr=', arr);

   let empty = Array.of();
   console.log(empty);
 }

 {
   // 把一些集合和伪数组转换成数组
   let p = document.querySelectorAll('p');

   let pArr = Array.from(p);
   pArr.forEach((item) => {
     console.log(item.textContent);
   });

   console.log(Array.from([1,3,5], (item) => { return item*2 })); // 第二个函数起到map的方法
 }

 {
   //填充
   console.log('fill-7', [1, 'a', undefined].fill(7)); 
   console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3));
 }

 {
   // 返回所有的键
   for(let index of ['1','c','ks'].keys()) {
    console.log('keys',index);
   }
   // 返回所有的值
   for(let value of ['1','c','ks'].values()) {
    console.log('values',value);
   }
   // 返回键值的集合
   for(let [index,value] of ['1','c','ks'].entries()) {
    console.log('values',index,value);
   }
 }

 {
   console.log([1,2,3,4,5].copyWithin(0,3,4));
 }

 {
   console.log([1,2,3,4,5,6].find((item) => { return item > 3; })); // 依照顺序找到符合条件的第一个并返回
   console.log([1,2,3,4,5,6].findIndex((item) => { return item > 3; })); // 依照顺序找到符合条件的第一个的索引并返回
 }

 {
   console.log('number', [1,2,NaN].includes(1));
 }