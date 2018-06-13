/**
 * 类
 * 基础语法 类的继承 静态方法 静态属性 getter setter
 */

{
  // 基本定义和生成实例
  class Parent{
    constructor(name='Au') {
      this.name = name;
    }
  }

  let v_parent = new Parent('v');
  console.log('构造函数与实例', v_parent);
}

{
  // 继承
  class Parent{
    constructor(name='Au') {
      this.name = name;
    }
  }

  class Child extends Parent{
    
  }

  console.log('继承', new Child());
}

{
  // 继承传递参数
  class Parent{
    constructor(name='Au') {
      this.name = name;
    }
  }

  class Child extends Parent{
    constructor(name='cihld') {
      super(name);
      this.type = 'child'; // 在继承关系中子类的构造函数用了super来传递参数必须放到第一行
    }
  }

  console.log('继承传递参数', new Child());
}

{
   // getter, setter
  class Parent{
    constructor(name='Au') {
      this.name = name;
    }

    get longName() {
      return 'mk' + this.name
    }

    set longName(value) {
      this.name = value;
    }
  }

  let v = new Parent();
  console.log('getter', v.longName);

  v.longName = 'Hi~'
  console.log('setter', v.longName);
}

{
  // 静态方法
  class Parent{
    constructor(name='Au') {
      this.name = name;
    }
    static tell() {
      console.log('tell');
    }
  }

  Parent.tell();
}

{
  // 静态属性
  class Parent{
    constructor(name='Au') {
      this.name = name;
    }
  }

  Parent.type = 'test';

  console.log('静态属性', Parent.type);
}