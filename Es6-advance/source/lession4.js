/**
 * 字符串扩展
 *    字符串新增特性
 *      Unicode表示法 遍历接口
 *      模板字符串 新增方法10中
 */

 {
   console.log('a', `\u0061`);
   console.log('s', `\u020BB7`); // 大于0xFFFF就会被当作两个字节处理
   console.log('s', `\u{020BB7}`);
 }

 {
   // es5
  let s = '𠮷';
  console.log(s.length);
  console.log('0', s.charAt(0));
  console.log('1', s.charAt(1));
  console.log('at0', s.charCodeAt(0)); // 取两个字节
  console.log('at1', s.charCodeAt(1));

  // es6
  let s1 = '𠮷a';
  console.log('length', s1.length);
  console.log('code0', s1.codePointAt(0)); // 当是0的时候取四个字节
  console.log('code0', s1.codePointAt(0).toString(16)); // 转换16进制
  console.log('code0', s1.codePointAt(1)); // 取得是后两个字节
  console.log('code0', s1.codePointAt(2)); 
}

{
  // es5
  console.log(String.fromCharCode("0x20bb7"));
  
  // es6
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  let str = 'string';
  console.log('includes', str.includes('r')); // 是否包含特定字符
  console.log('start', str.startsWith('str')); // 是否以特定字符开头
  console.log('start', str.endsWith('ng')); // 是否以特定字符结束
}

{
  let str = 'adc';
  console.log(str.repeat(3));
}

{
  let name = 'au';
  let info = 'Hi Es6!';
  let m = `${name} ${info}`;
  console.log(m);
}

{
  console.log('1'.padStart(2, 'a')); // 字符串补白
}

{
  let user = {
    name: 'Au',
    info: 'hello world'
  };

  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s, v1, v2) {
    console.log(s,v1,v2);
    return s+v1+v2;
  }
}

{
  console.log(String.raw`Hi\n${1+2}`); // raw使转译不生效
  console.log(`Hi\n${1+2}`);
}