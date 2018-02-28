# ResponseDOM

自动绑定 DOM 数据和 JavaScript 字符串变量，省去 DOM 手动更新 innerText 的操作。


# Example
有以下页面内容：
```html
<div id="J_Container">
  <h1>这是标题</h1>
  <div>
    <h2>这是默认副标题</h2>
    <p>当前网速：<span>3.0M/s</span></p>
  </div>
</div>
```

使用 ResponseDOM 自动绑定 DOM 和字符串变量：
```html
<div id="J_Container">
  <h1 r-text="title"></h1>
  <div>
    <h2 r-text="subTitle">这是默认副标题</h2>
    <p>当前网速：<span r-text="speed"></span></p>
  </div>
</div>
<script>
  import ResponseDOM from 'response-dom'
  const app = new ResponseDOM('J_Container', {
    title: '这是标题',
    subTitle: '这里的内容会覆盖默认的副标题',
    speed: '3.0M/s'
  })
</script>
```
