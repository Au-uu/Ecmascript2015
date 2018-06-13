/**
 * 数据结构
 *    Set的用法 weakSet的用法 Map的用法 WeakMap的用法
 */

 {
   let list = new Set();
   list.add(5);
   list.add(7);

   console.log('size',list.size);
 }

 {
   let arr = [1,2,3,4,5];
   let list = new Set(arr);
   console.log('size',list.size)
 }

 {
   let list = new Set();
   list.add(1);
   list.add(2);
   list.add(1);

   console.log('list',list);

   // 作为去重不做数据类型的转换
   let arr = [1,2,2,5,2,6,7];
   let list2 = new Set(arr);
   console.log('unique',list2);
 }

 {
   let arr = ['add', 'delete', 'clear', 'has'];
   let list = new Set(arr);
   console.log('has', list.has('add'));
   console.log('delete', list.delete('add'), list);
   list.clear();
   console.log(list);
 }

 {
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  for(let key of list.keys()){
    console.log('keys',key);
  } 
  for(let key of list.values()){
    console.log('keys',key);
  } 
  for(let [key,value] of list.entries()){
    console.log('entries',key,value);
  } 
 }

 { 
   // 元素只能使对象，都是弱引用会被垃圾回收机制忽略
   // 没有size
   let weakList = new WeakSet();

   let arg = {};

   weakList.add(arg);

   console.log('weakList',weakList)
 }

 {
   let map = new Map();
   let arr = ['123'];

   map.set(arr,456);
   console.log('map',map,map.get(arr));
 }

 {
   let map = new Map([['a',123],['b',456]]);
   console.log('map args',map);
   console.log('map size',map.size);
 }

 {
   let weakMap = new WeakMap();

   let o = {};
   weakMap.set(o,123);
   console.log(weakMap.get(o));
 }

 {
   // 数据结构横向对比 增 查 改 删
   let map = new Map();
   let array = [];

   // 增
   map.set('t', 1);
   array.push({t:1});
   console.info('map-array', map, array);

   // 查
   let map_exist = map.has('t');
   let array_exist = array.find(item => item.t);
   console.info('map-array', map_exist, array_exist);

   // 改
   map.set('t', 2);
   array.forEach(item => item.t?item.t=2:'');
   console.info('map-array-modifys',map,array);

   // 删
   map.delete('t');
   let index = array.findIndex(item => item.t);
   array.splice(index,1);
   console.info('map-array-delete', map, array);
 }

 {
   // set 和 array的对比
   let set = new Set();
   let array = [];

   //增
   set.add({t:1});
   array.push({t:1});
   console.info('set-array', set, array);

   //查
   let set_exist = set.has({t:1});
   let array_exist = array.find(item=>item.t);
   console.info('set-array',set_exist,array_exist);

   //改
   set.forEach(item => item.t?item.t=2:'');
   array.forEach(item => item.t?item.t=2:'');
   console.info('set-array-modify', set, array);

   //删
   set.forEach(item=>item.t?set.delete(item):'');
   let index = array.findIndex(item=>item.t);
   array.splice(index,1);
   console.info('set-array-empty', set, array);
 }

 {
   // map set object 对比
   let item = {t:1};
   let map = new Map();
   let set = new Set();
   let obj = {};

   // 增
   map.set('t',1);
   set.add(item);
   obj['t']=1;

   console.info('map-set-obj', obj, map, set);

   // 查
   console.info({
     map_exist: map.has('t'),
     set_exist: set.has(item),
     obj_exist: 't' in obj
   });

   // 改
   map.set('t',2);
   item.t = 2;
   obj['t']=2;
   console.info('map-set-obj-modify', obj, map, set);

   //删除
   map.delete('t');
   set.delete(item);
   delete obj['t'];
   console.info('map-set-obj-empty', obj,map,set);
 }