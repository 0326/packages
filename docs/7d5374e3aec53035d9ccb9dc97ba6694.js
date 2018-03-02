require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({7:[function(require,module,exports) {

},{}],13:[function(require,module,exports) {
module.exports=`<h1 id="responsedom">ResponseDOM</h1>
<p>自动绑定 DOM 数据和 JavaScript 字符串变量，省去 DOM 手动更新 innerText 的操作。</p>
<h1 id="example">Example</h1>
<p>有以下页面内容：</p>
<pre><code class="lang-html">&lt;div id=&quot;J_Container&quot;&gt;
  &lt;h1&gt;这是标题&lt;/h1&gt;
  &lt;div&gt;
    &lt;h2&gt;这是默认副标题&lt;/h2&gt;
    &lt;p&gt;当前网速：&lt;span&gt;3.0M/s&lt;/span&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>使用 ResponseDOM 自动绑定 DOM 和字符串变量：</p>
<pre><code class="lang-html">&lt;div id=&quot;J_Container&quot;&gt;
  &lt;h1 r-text=&quot;title&quot;&gt;&lt;/h1&gt;
  &lt;div&gt;
    &lt;h2 r-text=&quot;subTitle&quot;&gt;这是默认副标题&lt;/h2&gt;
    &lt;p&gt;当前网速：&lt;span r-text=&quot;speed&quot;&gt;&lt;/span&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
  import ResponseDOM from &#39;response-dom&#39;
  const app = new ResponseDOM(&#39;J_Container&#39;, {
    title: &#39;这是标题&#39;,
    subTitle: &#39;这里的内容会覆盖默认的副标题&#39;,
    speed: &#39;3.0M/s&#39;
  })
&lt;/script&gt;
</code></pre>
`
},{}],14:[function(require,module,exports) {
module.exports=`<h1 id="-generate-color-">颜色生成器(generate-color)</h1>
<p>JavaScript 颜色生成器，支持以下功能：</p>
<ul>
<li>随机获取一种颜色(或颜色列表)；</li>
<li>从指定色彩风格(比如 web 风格，material 风格)中获取颜色；</li>
<li>根据指定输入字符串(号码串) 返回指定色值；</li>
<li>支持 rgba、hex 格式返回。</li>
</ul>
<h1 id="start">Start</h1>
<p>安装依赖：</p>
<pre><code class="lang-shell">npm i generate-color --save # or yarn add generate-color
</code></pre>
<h3 id="-">简单用法</h3>
<pre><code class="lang-javascript">import genColor from &#39;generate-color&#39;
// 随机返回16进制色值, 如 &#39;#ffffff&#39;
genColor()
</code></pre>
<p>使用指定主题风格的拾色器：</p>
<pre><code class="lang-javascript">import { genWebColor, genMaterialColor } from &#39;generate-color&#39;
// 随机返回web标准风格颜色的16进制色值, 如 &#39;#ffffff&#39;
genWebColor()
// 随机返回material风格颜色的16进制色值, 如 &#39;#448aff&#39;
genMaterialColor()
</code></pre>
<p>web 标准色值集合, 符合 CSS Color Module Level 4 中定义的色彩名，参考：</p>
<ul>
<li><a href="https://www.w3.org/TR/css-color-4/#named-colors">https://www.w3.org/TR/css-color-4/#named-colors</a></li>
</ul>
<p><img src="http://7xp4vm.com1.z0.glb.clouddn.com/css-color-module-level-4.png" alt=""></p>
<p>material 标准色值集合，参考：</p>
<ul>
<li><a href="https://material.io/guidelines/style/color.html#color-color-palette">https://material.io/guidelines/style/color.html#color-color-palette</a></li>
</ul>
<p><img src="http://7xp4vm.com1.z0.glb.clouddn.com/materialcolor.png" alt=""></p>
<h3 id="-">进阶用法</h3>
<p>可以通过函数参数定制返回结果：</p>
<h4 id="num-">num: 指定返回数量</h4>
<pre><code class="lang-javascript">// 返回 1 个随机色值字符串
genColor({  num: 1 })
// 返回 2 个或多个随机色值数组
genColor({  num: 2 }) // [&#39;#ffffff&#39;, &#39;#000000&#39;]
</code></pre>
<h4 id="format-">format: 指定返回格式</h4>
<pre><code class="lang-javascript">// 返回 rgb 格式字符串：rgb(255,255,255)
genColor({ format: &#39;rgb&#39; })
// 返回 rgba 格式字符串：rgba(255,255,255, 1)
genColor({ format: &#39;rgba&#39; })
// 返回 hex 格式字符串：ffffff
genColor({ format: &#39;hex&#39; })
// 返回 hex 格式字符串，自定义前缀：0xffffff, 注意 prefix 参数只在 format 为 hex 时有效
genColor({ format: &#39;hex&#39;, prefix: &#39;0x&#39; })
// 返回 { r: 255, g: 255, b: 255, a: 1 } rgba 信息对象
genColor({ format: &#39;object&#39; })
</code></pre>
<h4 id="algorithm-">algorithm: 指定随机算法</h4>
<pre><code class="lang-javascript">// 目前仅使用 JS 的 Math.random 随机颜色
genColor({ format: &#39;hex&#39;, algorithm: &#39;Math.random&#39; })
</code></pre>
`
},{}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../packages/response-dom/README.md"),e=a(t),r=require("../packages/generate-color/README.md"),o=a(r);function a(t){return t&&t.__esModule?t:{default:t}}var n=window.jQuery,c={};Array.from(n("#J_Config").find("a")).map(function(t){c[t.dataset.name]=t.href});var l=[{title:"通用模板",anchor:"comp-tpl",content:e.default},{title:"颜色生成器",anchor:"generate-color",src:c["generate-color"],content:o.default},{title:"RPC抽奖",anchor:"rpc-lottery",src:c["rpc-lottery"],content:e.default},{title:"RPC发奖",anchor:"rpc-award",src:c["rpc-award"],content:e.default},{title:"领奖按钮",anchor:"lottery-button",src:c["lottery-button"],content:e.default},{title:"中奖记录",anchor:"lottery-record",src:c["lottery-record"],content:e.default}];exports.default=l;
},{"../packages/response-dom/README.md":13,"../packages/generate-color/README.md":14}],4:[function(require,module,exports) {
"use strict";require("./css/main.css"),require("./css/welcome.css"),require("./css/side-menu.css"),require("./css/simulator.css");var e=require("./doconfig"),r=n(e);function n(e){return e&&e.__esModule?e:{default:e}}var t=window.jQuery;function u(e){var n=a(r.default);n=-1===n?0:n;var t=r.default.map(function(e,r){return'<li class="'+(r===n?"pure-menu-item pure-menu-selected":"pure-menu-item")+'" data-src="'+e.src+'" data-index="'+r+'">\n    <a href="#'+e.anchor+'" class="pure-menu-link">'+e.title+"</a>\n  </li>"}).join("");e.find(".pure-menu-list")[0].innerHTML=t}function i(e,n){var u=r.default[e]||{};n.html(u.content),u.src?(t("#simulator").find("iframe")[0].src=u.src,t("#simulator").show()):t("#simulator").hide(),t("pre code").each(function(e,r){hljs.highlightBlock(r)})}function a(e){var r=location.hash.substr(1);if(r)for(var n=0;n<e.length;n++)if(e[n].anchor===r)return n;return-1}t("#J_fullscreen").on("click",function(e){var r=t(e.target).data("href");r?window.open(r):(t(e.currentTarget).addClass("animated-zoom-out"),setTimeout(function(){t(e.currentTarget).remove()},1e3))}),function(e,n){var s=t("#menu"),c=t("#main");u(s),s.on("click",".pure-menu-item",function(e){var r=t(e.currentTarget);s.find(".pure-menu-selected").removeClass("pure-menu-selected"),r.addClass("pure-menu-selected"),i(r.data("index"),c)});var o=a(r.default);-1!==o&&i(o,c)}(window,window.document);
},{"./css/main.css":7,"./css/welcome.css":7,"./css/side-menu.css":7,"./css/simulator.css":7,"./doconfig":11}]},{},[4])