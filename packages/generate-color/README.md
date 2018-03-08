# generate-color(颜色生成器)
Generate random color(s), support RGB, material and web standard, rgb、rgba、hex format, node.js and browser environment.

JavaScript 颜色生成器，支持 RGB, meterial 和 web 标准色彩模式，支持 rgb、rgba、hex 格式返回，支持 node.js 和浏览器环境。

Github Repo: https://github.com/0326/packages/tree/master/packages/generate-color

<p align="left">
  <a href="https://www.npmjs.com/package/generate-color">
    <img src="https://img.shields.io/npm/dt/generate-color.svg" alt="npm">
  </a>
  <a href="https://www.npmjs.com/package/generate-color">
    <img src="https://img.shields.io/npm/v/generate-color.svg" alt="npm">
  </a>
  <a href="https://coveralls.io/r/0326/generate-color">
    <img src="https://img.shields.io/npm/l/generate-color.svg" alt="License">
  </a>
</p>

# Start
```shell
npm i generate-color --save # or yarn add generate-color
```
### Browser

```javascript
import { genWebColor, genMaterialColor, default as genRGBColor } from 'generate-color'

// return hex RGB value，eg. '#0000ff'
genRGBColor()
// return web standard CSS3 Color Modules Level 4 color, eg. '#ffffff'
genWebColor()
// return material style color, eg. '#448aff'
genMaterialColor()
```

### Node.js

```javascript
const generateColor = require('generate-color')

// return hex RGB value，eg. '#0000ff'
generateColor.default()
// return web standard CSS3 Color Modules Level 4 color, eg. '#ffffff'
generateColor.genWebColor()
// return material style color, eg. '#448aff'
generateColor.genMaterialColor()
```

web standard mode: CSS Color Module Level 4：
- https://www.w3.org/TR/css-color-4/#named-colors

![](http://7xp4vm.com1.z0.glb.clouddn.com/css-color-module-level-4.png)

material mode：
- https://material.io/guidelines/style/color.html#color-color-palette

![](http://7xp4vm.com1.z0.glb.clouddn.com/materialcolor.png)


### Advance
Custom params to get custom result.
#### num: custrom random colors number
```javascript
// return string like '#ff0000'
genColor({  num: 1 })
// return array
genColor({  num: 2 }) // ['#ffffff', '#000000']
```

#### format
```javascript
// get rgb format：rgb(255,255,255)
genColor({ format: 'rgb' })
// get rgba format：rgba(255,255,255, 1)
genColor({ format: 'rgba' })
// get hex format：ffffff
genColor({ format: 'hex' })
// get hex format，custom prefix：0xffffff, prefix works only format=hex
genColor({ format: 'hex', prefix: '0x' })
// get { r: 255, g: 255, b: 255, a: 1 } rgba object format
genColor({ format: 'object' })
```

#### algorithm: custom random algorithm
```javascript
// only support Math.random()
genColor({ format: 'hex', algorithm: 'Math.random' })
```

#### rules: custom random rules (TODO)

```javascript
const config = {
  num: 10,
  rules: {
    names: ['red', 'pink', 'deep purple'],
    levels: ['50', '100', '500', 'A100']
  }
}
genMaterialColor(config)
```

# License
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/License_icon-mit-88x31-2.svg/128px-License_icon-mit-88x31-2.svg.png">
