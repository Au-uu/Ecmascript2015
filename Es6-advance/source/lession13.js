/**
 * Promise
 *  异步 Promise作用 Promise基本用法
 */

 {
   // 基本定义
   let ajax = callback => {
     console.log('执行');
    setTimeout(() => {
      callback && callback.call()
    }, 1000);
   };
   
   /* ajax(() => {
     console.log('timeout1');
   }) */
 }

 {
  let ajax = () => {
    console.log('执行2');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000)
    })
  }

  /* ajax()
  .then(() => {
    console.log('promise', 'timeout2');
  }) */
 }

 {
  let ajax = () => {
    console.log('执行3');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000)
    })
  }
    
  /* ajax()
  .then(() => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve();
      }, 2000)
    })
  })
  .then(() => {
    console.log('promise', 'timeout3');
  }) */
 }

 {
  let ajax = num => {
    console.log('执行3');
    return new Promise((resolve, reject) => {
      if (num > 5) {
        resolve()
      } else {
        throw new Error('出错了');
      }
    })
  }
    
  ajax(2)
  .then(() => {
    console.log('resolve', 6)
  })
  .catch((e) => {
    console.log('catch',e);
  })
 }

 {
   // 所有图片加载完再加载页面
   function loadImg(src) {
     return new Promise((resolve,reject) => {
       let img = document.createElement('img');
       img.src = src;
       img.onload = () => {
        resolve(img)
       }
       img.onerror = () => {
         reject(err);
       }
     })
   }

   function showImgs(imgs) {
     img.forEach(img => {
       document.body.appendChild(img);
     })
   }

   Promise.all([
     loadImg('http://i4.buimg.com/567571/dflef0720bea6832.png'),
     loadImg('http://i4.buimg.com/56751/2b07ee25b08930ba.png'),
     loadImg('http://i2.buimg.com/56751/5eb8190d6b2a1c9c.png')
   ]).then(showImgs);
 }

 {
   // 有一个图片加载完就添加到页面中
  function loadImg(src) {
    return new Promise((resolve,reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = () => {
       resolve(img)
      }
      img.onerror = () => {
        reject(err);
      }
    })
  }

  function showImgs(img) {
    let p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
  }

  Promise.race([
    loadImg('http://i4.buimg.com/567571/dflef0720bea6832.png'),
    loadImg('http://i4.buimg.com/56751/2b07ee25b08930ba.png'),
    loadImg('http://i2.buimg.com/56751/5eb8190d6b2a1c9c.png')
  ]).then(showImgs);
 }