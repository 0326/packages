# 颜色生成器(generate-color)
JavaScript 颜色生成器，支持以下功能：
- 随机获取一种颜色(或颜色列表)；
- 从指定色彩风格(比如 web 风格，material 风格)中获取颜色；
- 根据指定输入字符串(号码串) 返回指定色值；
- 支持 rgba、hex 格式返回。

# Start
安装依赖：
```shell
npm i generate-color --save # or yarn add generate-color
```
### 简单用法

```javascript
import genColor from 'generate-color'
// 随机返回16进制色值, 如 '#ffffff'
genColor()
```

使用指定主题风格的拾色器：

```javascript
import { genWebColor, genMaterialColor } from 'generate-color'
// 随机返回web标准风格颜色的16进制色值, 如 '#ffffff'
genWebColor()
// 随机返回material风格颜色的16进制色值, 如 '#448aff'
genMaterialColor()
```

web 标准色值集合, 符合 CSS Color Module Level 4 中定义的色彩名，参考：
- https://www.w3.org/TR/css-color-4/#named-colors

![](http://7xp4vm.com1.z0.glb.clouddn.com/css-color-module-level-4.png)

material 标准色值集合，参考：
- https://material.io/guidelines/style/color.html#color-color-palette

![](http://7xp4vm.com1.z0.glb.clouddn.com/materialcolor.png)



### 进阶用法
可以通过函数参数定制返回结果：

#### num: 指定返回数量
```javascript
// 返回 1 个随机色值字符串
genColor({  num: 1 })
// 返回 2 个或多个随机色值数组
genColor({  num: 2 }) // ['#ffffff', '#000000']
```

#### format: 指定返回格式
```javascript
// 返回 rgb 格式字符串：rgb(255,255,255)
genColor({ format: 'rgb' })
// 返回 rgba 格式字符串：rgba(255,255,255, 1)
genColor({ format: 'rgba' })
// 返回 hex 格式字符串：ffffff
genColor({ format: 'hex' })
// 返回 hex 格式字符串，自定义前缀：0xffffff, 注意 prefix 参数只在 format 为 hex 时有效
genColor({ format: 'hex', prefix: '0x' })
// 返回 { r: 255, g: 255, b: 255, a: 1 } rgba 信息对象
genColor({ format: 'object' })
```

#### algorithm: 指定随机算法
```javascript
// 目前仅使用 JS 的 Math.random 随机颜色
genColor({ format: 'hex', algorithm: 'Math.random' })
```
