/**
 * Decorator 修饰器
 *  函数 修改行为  类的行为 
 */

 {
   let readonly = function(target,name,descriptor) {
     descriptor.writable = false;
     return descriptor;
   };

   class Test{
     @readonly
     time(){
       return '2018-06-13'
     }
   }

   let test = new Test();

   test.time = function() {
     console.log('rest time');
   }

   console.log(test.time());
 }

 {
   let typename = function(target,name,descriptor) {
     target.name = 'hello';
   }

   @typename
   class Test{

   }

   console.log('类修饰符', Test.myname);
 }

 // 第三方修饰器js库 core-decorators

 {
   let log = type => {
     return function(target,name,descriptor) {
       let src_method = descriptor.value;
       descriptor.value = (...arg) => {
         src_method.apply(target,arg);
         console.info(`log ${type}`);
       }
     }
   }

   class AD{
     @log('show')
     show() {
      console.info(`ad is show`);
     }

     @log('click')
     click(){
      console.info(`ad is click`);
     }
   }

   let ad = new AD();
   ad.show();
   ad.click();
 }