// 正则扩展
// 新增特性
// 构造函数的变化 正则方法的扩展 u修饰符 y修饰符 s修饰符

{
  let regex = new RegExp('xyz', 'i');
  let regx2 = new RegExp(/xyz/i);

  console.log(regex.test('xyz123'), regx2.test('xyz123'));

  let regx3 = new RegExp(/xyz/ig, 'i');// es6新增 第二个参数会覆盖修饰符 ig
  console.log(regx3.flags); // 打印出正则构造函数的修饰符
}

// y修饰符
// g 和 y
// 相同点：都是全局匹配; 
// 不同点: g是从上次匹配的位置继续匹配,y匹配的是紧挨着的第一个字符

{
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;

  console.log('one', a1.exec(s), a2.exec(s));
  console.log('two', a1.exec(s), a2.exec(s));

  console.log(a1.sticky,a2.sticky); // 判断是否开启了粘连模式
}

// u修饰符 处理unicode特征值
// u修饰符会将后面匹配的当作一个字符看待
// 大于两个字节的字符要用u修饰符

{
  /* console.log('u', /^\uD83D/.test('\uD83D\uDC2A'));
  console.log('u', /^\uD83D/u.test('\uD83D\uDC2A')); */

  /* console.log(/\u{61}/.test('a'));
  console.log(/\u{61}/u.test('a')); */
}