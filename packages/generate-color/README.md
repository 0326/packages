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

web 标准色值集合, 符合 CSS Color Module Level 3 中定义的色彩名，参考：
- https://www.w3.org/TR/2017/CR-css-color-3-20171205/
- https://www.w3.org/TR/SVG/types.html#ColorKeywords

| color | keyword | rgb |
| ---: | :--- | :--- |
|  xxx | aliceblue | rgb(240, 248, 255) |
|  xxx | antiquewhite	| rgb(250, 235, 215) |
|  xxx | aqua	| rgb( 0, 255, 255) |
|  xxx | aquamarine	| rgb(127, 255, 212) |
|  xxx | azure	| rgb(240, 255, 255) |
|  xxx | beige	| rgb(245, 245, 220) |
|  xxx | bisque	| rgb(255, 228, 196) |
|  xxx | black	| rgb( 0, 0, 0) |
|  xxx | blanchedalmond	| rgb(255, 235, 205) |
|  xxx | blue	| rgb( 0, 0, 255) |
|  xxx | blueviolet	| rgb(138, 43, 226) |
|  xxx | brown	| rgb(165, 42, 42) |
|  xxx | burlywood	| rgb(222, 184, 135) |
|  xxx | cadetblue	| rgb( 95, 158, 160) |
|  xxx | chartreuse	| rgb(127, 255, 0) |
|  xxx | chocolate	| rgb(210, 105, 30) |
|  xxx | coral	| rgb(255, 127, 80) |
|  xxx | cornflowerblue	| rgb(100, 149, 237) |
|  xxx | cornsilk	| rgb(255, 248, 220) |
|  xxx | crimson	| rgb(220, 20, 60) |
|  xxx | cyan	| rgb( 0, 255, 255) |
|  xxx | darkblue	| rgb( 0, 0, 139) |
|  xxx | darkcyan	| rgb( 0, 139, 139) |
|  xxx | darkgoldenrod	| rgb(184, 134, 11) |
|  xxx | darkgray	| rgb(169, 169, 169) |
|  xxx | darkgreen	| rgb( 0, 100, 0) |
|  xxx | darkgrey	| rgb(169, 169, 169) |
|  xxx | darkkhaki	| rgb(189, 183, 107) |
|  xxx | darkmagenta	| rgb(139, 0, 139) |
|  xxx | darkolivegreen	| rgb( 85, 107, 47) |
|  xxx | darkorange	| rgb(255, 140, 0) |
|  xxx | darkorchid	| rgb(153, 50, 204) |
|  xxx | darkred	| rgb(139, 0, 0) |
|  xxx | darksalmon	| rgb(233, 150, 122) |
|  xxx | darkseagreen	| rgb(143, 188, 143) |
|  xxx | darkslateblue	| rgb( 72, 61, 139) |
|  xxx | darkslategray	| rgb( 47, 79, 79) |
|  xxx | darkslategrey	| rgb( 47, 79, 79) |
|  xxx | darkturquoise	| rgb( 0, 206, 209) |
|  xxx | darkviolet	| rgb(148, 0, 211) |
|  xxx | deeppink	| rgb(255, 20, 147) |
|  xxx | deepskyblue	| rgb( 0, 191, 255) |
|  xxx | dimgray	| rgb(105, 105, 105) |
|  xxx | dimgrey	| rgb(105, 105, 105) |
|  xxx | dodgerblue	| rgb( 30, 144, 255) |
|  xxx | firebrick	| rgb(178, 34, 34) |
|  xxx | floralwhite	| rgb(255, 250, 240) |
|  xxx | forestgreen	| rgb( 34, 139, 34) |
|  xxx | fuchsia	| rgb(255, 0, 255) |
|  xxx | gainsboro	| rgb(220, 220, 220) |
|  xxx | ghostwhite	| rgb(248, 248, 255) |
|  xxx | gold	| rgb(255, 215, 0) |
|  xxx | goldenrod	| rgb(218, 165, 32) |
|  xxx | gray	| rgb(128, 128, 128) |
|  xxx | grey	| rgb(128, 128, 128) |
|  xxx | green	| rgb( 0, 128, 0) |
|  xxx | greenyellow	| rgb(173, 255, 47) |
|  xxx | honeydew	| rgb(240, 255, 240) |
|  xxx | hotpink	| rgb(255, 105, 180) |
|  xxx | indianred	| rgb(205, 92, 92) |
|  xxx | indigo	| rgb( 75, 0, 130) |
|  xxx | ivory	| rgb(255, 255, 240) |
|  xxx | khaki	| rgb(240, 230, 140) |
|  xxx | lavender	| rgb(230, 230, 250) |
|  xxx | lavenderblush	| rgb(255, 240, 245) |
|  xxx | lawngreen	| rgb(124, 252, 0) |
|  xxx | lemonchiffon	| rgb(255, 250, 205) |
|  xxx | lightblue	| rgb(173, 216, 230) |
|  xxx | lightcoral	| rgb(240, 128, 128) |
|  xxx | lightcyan	| rgb(224, 255, 255) |
|  xxx | lightgoldenrodyellow	| rgb(250, 250, 210) |
|  xxx | lightgray	| rgb(211, 211, 211) |
|  xxx | lightgreen	| rgb(144, 238, 144) |
|  xxx | lightgrey	| rgb(211, 211, 211) |
|  xxx | lightpink	| rgb(255, 182, 193) |
|  xxx | lightsalmon	| rgb(255, 160, 122) |
|  xxx | lightseagreen	| rgb( 32, 178, 170) |
|  xxx | lightskyblue	| rgb(135, 206, 250) |
|  xxx | lightslategray	| rgb(119, 136, 153) |
|  xxx | lightslategrey	| rgb(119, 136, 153) |
|  xxx | lightsteelblue	| rgb(176, 196, 222) |
|  xxx | lightyellow	| rgb(255, 255, 224) |
|  xxx | lime	| rgb( 0, 255, 0) |
|  xxx | limegreen	| rgb( 50, 205, 50) |
|  xxx | linen	| rgb(250, 240, 230) |
|  xxx | magenta	| rgb(255, 0, 255) |
|  xxx | maroon	| rgb(128, 0, 0) |
|  xxx | mediumaquamarine	| rgb(102, 205, 170) |
|  xxx | mediumblue	| rgb( 0, 0, 205) |
|  xxx | mediumorchid	| rgb(186, 85, 211) |
|  xxx | mediumpurple	| rgb(147, 112, 219) |
|  xxx | mediumseagreen	| rgb( 60, 179, 113) |
|  xxx | mediumslateblue	| rgb(123, 104, 238) |
|  xxx | mediumspringgreen	| rgb( 0, 250, 154) |
|  xxx | mediumturquoise	| rgb( 72, 209, 204) |
|  xxx | mediumvioletred	| rgb(199, 21, 133) |
|  xxx | midnightblue	| rgb( 25, 25, 112) |
|  xxx | mintcream	| rgb(245, 255, 250) |
|  xxx | mistyrose	| rgb(255, 228, 225) |
|  xxx | moccasin	| rgb(255, 228, 181) |
|  xxx | navajowhite	| rgb(255, 222, 173) |
|  xxx | navy	| rgb( 0, 0, 128) |
|  xxx | oldlace	| rgb(253, 245, 230) |
|  xxx | olive	| rgb(128, 128, 0) |
|  xxx | olivedrab	| rgb(107, 142, 35) |
|  xxx | orange	| rgb(255, 165, 0) |
|  xxx | orangered	| rgb(255, 69, 0) |
|  xxx | orchid	| rgb(218, 112, 214) |
|  xxx | palegoldenrod	| rgb(238, 232, 170) |
|  xxx | palegreen	| rgb(152, 251, 152) |
|  xxx | paleturquoise	| rgb(175, 238, 238) |
|  xxx | palevioletred	| rgb(219, 112, 147) |
|  xxx | papayawhip	| rgb(255, 239, 213) |
|  xxx | peachpuff	| rgb(255, 218, 185) |
|  xxx | peru	| rgb(205, 133, 63) |
|  xxx | pink	| rgb(255, 192, 203) |
|  xxx | plum	| rgb(221, 160, 221) |
|  xxx | powderblue	| rgb(176, 224, 230) |
|  xxx | purple	| rgb(128, 0, 128) |
|  xxx | red	| rgb(255, 0, 0) |
|  xxx | rosybrown	| rgb(188, 143, 143) |
|  xxx | royalblue	| rgb( 65, 105, 225) |
|  xxx | saddlebrown	| rgb(139, 69, 19) |
|  xxx | salmon	| rgb(250, 128, 114) |
|  xxx | sandybrown	| rgb(244, 164, 96) |
|  xxx | seagreen	| rgb( 46, 139, 87) |
|  xxx | seashell	| rgb(255, 245, 238) |
|  xxx | sienna	| rgb(160, 82, 45) |
|  xxx | silver	| rgb(192, 192, 192) |
|  xxx | skyblue	| rgb(135, 206, 235) |
|  xxx | slateblue	| rgb(106, 90, 205) |
|  xxx | slategray	| rgb(112, 128, 144) |
|  xxx | slategrey	| rgb(112, 128, 144) |
|  xxx | snow	| rgb(255, 250, 250) |
|  xxx | springgreen	| rgb( 0, 255, 127) |
|  xxx | steelblue	| rgb( 70, 130, 180) |
|  xxx | tan	| rgb(210, 180, 140) |
|  xxx | teal	| rgb( 0, 128, 128) |
|  xxx | thistle	| rgb(216, 191, 216) |
|  xxx | tomato	| rgb(255, 99, 71) |
|  xxx | turquoise	| rgb( 64, 224, 208) |
|  xxx | violet	| rgb(238, 130, 238) |
|  xxx | wheat	| rgb(245, 222, 179) |
|  xxx | white	| rgb(255, 255, 255) |
|  xxx | whitesmoke	| rgb(245, 245, 245) |
|  xxx | yellow	| rgb(255, 255, 0) |
|  xxx | yellowgreen	| rgb(154, 205, 50) |


material 标准色值集合：




### 进阶用法
可以通过函数参数定制返回结果：

#### num: 指定返回数量
```javascript
// 返回 1 个随机色值字符串，等价于genColor()
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
