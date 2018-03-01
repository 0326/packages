require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({16:[function(require,module,exports) {

},{}],23:[function(require,module,exports) {
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
},{}],24:[function(require,module,exports) {
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
<p>web 标准色值集合, 符合 CSS Color Module Level 3 中定义的色彩名，参考：</p>
<ul>
<li><a href="https://www.w3.org/TR/2017/CR-css-color-3-20171205/">https://www.w3.org/TR/2017/CR-css-color-3-20171205/</a></li>
<li><a href="https://www.w3.org/TR/SVG/types.html#ColorKeywords">https://www.w3.org/TR/SVG/types.html#ColorKeywords</a></li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:right">color</th>
<th style="text-align:left">keyword</th>
<th style="text-align:left">rgb</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">aliceblue</td>
<td style="text-align:left">rgb(240, 248, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">antiquewhite</td>
<td style="text-align:left">rgb(250, 235, 215)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">aqua</td>
<td style="text-align:left">rgb( 0, 255, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">aquamarine</td>
<td style="text-align:left">rgb(127, 255, 212)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">azure</td>
<td style="text-align:left">rgb(240, 255, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">beige</td>
<td style="text-align:left">rgb(245, 245, 220)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">bisque</td>
<td style="text-align:left">rgb(255, 228, 196)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">black</td>
<td style="text-align:left">rgb( 0, 0, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">blanchedalmond</td>
<td style="text-align:left">rgb(255, 235, 205)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">blue</td>
<td style="text-align:left">rgb( 0, 0, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">blueviolet</td>
<td style="text-align:left">rgb(138, 43, 226)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">brown</td>
<td style="text-align:left">rgb(165, 42, 42)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">burlywood</td>
<td style="text-align:left">rgb(222, 184, 135)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">cadetblue</td>
<td style="text-align:left">rgb( 95, 158, 160)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">chartreuse</td>
<td style="text-align:left">rgb(127, 255, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">chocolate</td>
<td style="text-align:left">rgb(210, 105, 30)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">coral</td>
<td style="text-align:left">rgb(255, 127, 80)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">cornflowerblue</td>
<td style="text-align:left">rgb(100, 149, 237)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">cornsilk</td>
<td style="text-align:left">rgb(255, 248, 220)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">crimson</td>
<td style="text-align:left">rgb(220, 20, 60)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">cyan</td>
<td style="text-align:left">rgb( 0, 255, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkblue</td>
<td style="text-align:left">rgb( 0, 0, 139)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkcyan</td>
<td style="text-align:left">rgb( 0, 139, 139)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkgoldenrod</td>
<td style="text-align:left">rgb(184, 134, 11)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkgray</td>
<td style="text-align:left">rgb(169, 169, 169)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkgreen</td>
<td style="text-align:left">rgb( 0, 100, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkgrey</td>
<td style="text-align:left">rgb(169, 169, 169)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkkhaki</td>
<td style="text-align:left">rgb(189, 183, 107)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkmagenta</td>
<td style="text-align:left">rgb(139, 0, 139)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkolivegreen</td>
<td style="text-align:left">rgb( 85, 107, 47)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkorange</td>
<td style="text-align:left">rgb(255, 140, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkorchid</td>
<td style="text-align:left">rgb(153, 50, 204)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkred</td>
<td style="text-align:left">rgb(139, 0, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darksalmon</td>
<td style="text-align:left">rgb(233, 150, 122)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkseagreen</td>
<td style="text-align:left">rgb(143, 188, 143)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkslateblue</td>
<td style="text-align:left">rgb( 72, 61, 139)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkslategray</td>
<td style="text-align:left">rgb( 47, 79, 79)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkslategrey</td>
<td style="text-align:left">rgb( 47, 79, 79)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkturquoise</td>
<td style="text-align:left">rgb( 0, 206, 209)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">darkviolet</td>
<td style="text-align:left">rgb(148, 0, 211)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">deeppink</td>
<td style="text-align:left">rgb(255, 20, 147)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">deepskyblue</td>
<td style="text-align:left">rgb( 0, 191, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">dimgray</td>
<td style="text-align:left">rgb(105, 105, 105)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">dimgrey</td>
<td style="text-align:left">rgb(105, 105, 105)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">dodgerblue</td>
<td style="text-align:left">rgb( 30, 144, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">firebrick</td>
<td style="text-align:left">rgb(178, 34, 34)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">floralwhite</td>
<td style="text-align:left">rgb(255, 250, 240)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">forestgreen</td>
<td style="text-align:left">rgb( 34, 139, 34)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">fuchsia</td>
<td style="text-align:left">rgb(255, 0, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">gainsboro</td>
<td style="text-align:left">rgb(220, 220, 220)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">ghostwhite</td>
<td style="text-align:left">rgb(248, 248, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">gold</td>
<td style="text-align:left">rgb(255, 215, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">goldenrod</td>
<td style="text-align:left">rgb(218, 165, 32)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">gray</td>
<td style="text-align:left">rgb(128, 128, 128)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">grey</td>
<td style="text-align:left">rgb(128, 128, 128)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">green</td>
<td style="text-align:left">rgb( 0, 128, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">greenyellow</td>
<td style="text-align:left">rgb(173, 255, 47)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">honeydew</td>
<td style="text-align:left">rgb(240, 255, 240)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">hotpink</td>
<td style="text-align:left">rgb(255, 105, 180)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">indianred</td>
<td style="text-align:left">rgb(205, 92, 92)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">indigo</td>
<td style="text-align:left">rgb( 75, 0, 130)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">ivory</td>
<td style="text-align:left">rgb(255, 255, 240)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">khaki</td>
<td style="text-align:left">rgb(240, 230, 140)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lavender</td>
<td style="text-align:left">rgb(230, 230, 250)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lavenderblush</td>
<td style="text-align:left">rgb(255, 240, 245)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lawngreen</td>
<td style="text-align:left">rgb(124, 252, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lemonchiffon</td>
<td style="text-align:left">rgb(255, 250, 205)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightblue</td>
<td style="text-align:left">rgb(173, 216, 230)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightcoral</td>
<td style="text-align:left">rgb(240, 128, 128)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightcyan</td>
<td style="text-align:left">rgb(224, 255, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightgoldenrodyellow</td>
<td style="text-align:left">rgb(250, 250, 210)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightgray</td>
<td style="text-align:left">rgb(211, 211, 211)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightgreen</td>
<td style="text-align:left">rgb(144, 238, 144)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightgrey</td>
<td style="text-align:left">rgb(211, 211, 211)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightpink</td>
<td style="text-align:left">rgb(255, 182, 193)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightsalmon</td>
<td style="text-align:left">rgb(255, 160, 122)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightseagreen</td>
<td style="text-align:left">rgb( 32, 178, 170)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightskyblue</td>
<td style="text-align:left">rgb(135, 206, 250)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightslategray</td>
<td style="text-align:left">rgb(119, 136, 153)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightslategrey</td>
<td style="text-align:left">rgb(119, 136, 153)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightsteelblue</td>
<td style="text-align:left">rgb(176, 196, 222)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lightyellow</td>
<td style="text-align:left">rgb(255, 255, 224)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">lime</td>
<td style="text-align:left">rgb( 0, 255, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">limegreen</td>
<td style="text-align:left">rgb( 50, 205, 50)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">linen</td>
<td style="text-align:left">rgb(250, 240, 230)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">magenta</td>
<td style="text-align:left">rgb(255, 0, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">maroon</td>
<td style="text-align:left">rgb(128, 0, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">mediumaquamarine</td>
<td style="text-align:left">rgb(102, 205, 170)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">mediumblue</td>
<td style="text-align:left">rgb( 0, 0, 205)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">mediumorchid</td>
<td style="text-align:left">rgb(186, 85, 211)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">mediumpurple</td>
<td style="text-align:left">rgb(147, 112, 219)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">mediumseagreen</td>
<td style="text-align:left">rgb( 60, 179, 113)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">mediumslateblue</td>
<td style="text-align:left">rgb(123, 104, 238)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">mediumspringgreen</td>
<td style="text-align:left">rgb( 0, 250, 154)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">mediumturquoise</td>
<td style="text-align:left">rgb( 72, 209, 204)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">mediumvioletred</td>
<td style="text-align:left">rgb(199, 21, 133)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">midnightblue</td>
<td style="text-align:left">rgb( 25, 25, 112)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">mintcream</td>
<td style="text-align:left">rgb(245, 255, 250)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">mistyrose</td>
<td style="text-align:left">rgb(255, 228, 225)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">moccasin</td>
<td style="text-align:left">rgb(255, 228, 181)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">navajowhite</td>
<td style="text-align:left">rgb(255, 222, 173)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">navy</td>
<td style="text-align:left">rgb( 0, 0, 128)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">oldlace</td>
<td style="text-align:left">rgb(253, 245, 230)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">olive</td>
<td style="text-align:left">rgb(128, 128, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">olivedrab</td>
<td style="text-align:left">rgb(107, 142, 35)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">orange</td>
<td style="text-align:left">rgb(255, 165, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">orangered</td>
<td style="text-align:left">rgb(255, 69, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">orchid</td>
<td style="text-align:left">rgb(218, 112, 214)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">palegoldenrod</td>
<td style="text-align:left">rgb(238, 232, 170)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">palegreen</td>
<td style="text-align:left">rgb(152, 251, 152)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">paleturquoise</td>
<td style="text-align:left">rgb(175, 238, 238)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">palevioletred</td>
<td style="text-align:left">rgb(219, 112, 147)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">papayawhip</td>
<td style="text-align:left">rgb(255, 239, 213)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">peachpuff</td>
<td style="text-align:left">rgb(255, 218, 185)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">peru</td>
<td style="text-align:left">rgb(205, 133, 63)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">pink</td>
<td style="text-align:left">rgb(255, 192, 203)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">plum</td>
<td style="text-align:left">rgb(221, 160, 221)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">powderblue</td>
<td style="text-align:left">rgb(176, 224, 230)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">purple</td>
<td style="text-align:left">rgb(128, 0, 128)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">red</td>
<td style="text-align:left">rgb(255, 0, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">rosybrown</td>
<td style="text-align:left">rgb(188, 143, 143)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">royalblue</td>
<td style="text-align:left">rgb( 65, 105, 225)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">saddlebrown</td>
<td style="text-align:left">rgb(139, 69, 19)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">salmon</td>
<td style="text-align:left">rgb(250, 128, 114)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">sandybrown</td>
<td style="text-align:left">rgb(244, 164, 96)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">seagreen</td>
<td style="text-align:left">rgb( 46, 139, 87)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">seashell</td>
<td style="text-align:left">rgb(255, 245, 238)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">sienna</td>
<td style="text-align:left">rgb(160, 82, 45)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">silver</td>
<td style="text-align:left">rgb(192, 192, 192)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">skyblue</td>
<td style="text-align:left">rgb(135, 206, 235)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">slateblue</td>
<td style="text-align:left">rgb(106, 90, 205)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">slategray</td>
<td style="text-align:left">rgb(112, 128, 144)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">slategrey</td>
<td style="text-align:left">rgb(112, 128, 144)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">snow</td>
<td style="text-align:left">rgb(255, 250, 250)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">springgreen</td>
<td style="text-align:left">rgb( 0, 255, 127)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">steelblue</td>
<td style="text-align:left">rgb( 70, 130, 180)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">tan</td>
<td style="text-align:left">rgb(210, 180, 140)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">teal</td>
<td style="text-align:left">rgb( 0, 128, 128)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">thistle</td>
<td style="text-align:left">rgb(216, 191, 216)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">tomato</td>
<td style="text-align:left">rgb(255, 99, 71)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">turquoise</td>
<td style="text-align:left">rgb( 64, 224, 208)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">violet</td>
<td style="text-align:left">rgb(238, 130, 238)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">wheat</td>
<td style="text-align:left">rgb(245, 222, 179)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">white</td>
<td style="text-align:left">rgb(255, 255, 255)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">whitesmoke</td>
<td style="text-align:left">rgb(245, 245, 245)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">yellow</td>
<td style="text-align:left">rgb(255, 255, 0)</td>
</tr>
<tr>
<td style="text-align:right">xxx</td>
<td style="text-align:left">yellowgreen</td>
<td style="text-align:left">rgb(154, 205, 50)</td>
</tr>
</tbody>
</table>
<p>material 标准色值集合：</p>
<h3 id="-">进阶用法</h3>
<p>可以通过函数参数定制返回结果：</p>
<h4 id="num-">num: 指定返回数量</h4>
<pre><code class="lang-javascript">// 返回 1 个随机色值字符串，等价于genColor()
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
`
},{}],20:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../packages/response-dom/README.md"),e=a(t),r=require("../packages/generate-color/README.md"),o=a(r);function a(t){return t&&t.__esModule?t:{default:t}}var n=window.jQuery,c={};Array.from(n("#J_Config").find("a")).map(function(t){c[t.dataset.name]=t.href});var l=[{title:"通用模板",anchor:"comp-tpl",content:e.default},{title:"颜色生成器",anchor:"generate-color",src:c["generate-color"],content:o.default},{title:"RPC抽奖",anchor:"rpc-lottery",src:c["rpc-lottery"],content:e.default},{title:"RPC发奖",anchor:"rpc-award",src:c["rpc-award"],content:e.default},{title:"领奖按钮",anchor:"lottery-button",src:c["lottery-button"],content:e.default},{title:"中奖记录",anchor:"lottery-record",src:c["lottery-record"],content:e.default}];exports.default=l;
},{"../packages/response-dom/README.md":23,"../packages/generate-color/README.md":24}],13:[function(require,module,exports) {
"use strict";require("./css/main.css"),require("./css/welcome.css"),require("./css/side-menu.css"),require("./css/simulator.css");var e=require("./doconfig"),r=n(e);function n(e){return e&&e.__esModule?e:{default:e}}var t=window.jQuery;function u(e){var n=a(r.default);n=-1===n?0:n;var t=r.default.map(function(e,r){return'<li class="'+(r===n?"pure-menu-item pure-menu-selected":"pure-menu-item")+'" data-src="'+e.src+'" data-index="'+r+'">\n    <a href="#'+e.anchor+'" class="pure-menu-link">'+e.title+"</a>\n  </li>"}).join("");e.find(".pure-menu-list")[0].innerHTML=t}function i(e,n){var u=r.default[e]||{};n.html(u.content),u.src?(t("#simulator").find("iframe")[0].src=u.src,t("#simulator").show()):t("#simulator").hide(),t("pre code").each(function(e,r){hljs.highlightBlock(r)})}function a(e){var r=location.hash.substr(1);if(r)for(var n=0;n<e.length;n++)if(e[n].anchor===r)return n;return-1}t("#J_fullscreen").on("click",function(e){var r=t(e.target).data("href");r?window.open(r):(t(e.currentTarget).addClass("animated-zoom-out"),setTimeout(function(){t(e.currentTarget).remove()},1e3))}),function(e,n){var s=t("#menu"),c=t("#main");u(s),s.on("click",".pure-menu-item",function(e){var r=t(e.currentTarget);s.find(".pure-menu-selected").removeClass("pure-menu-selected"),r.addClass("pure-menu-selected"),i(r.data("index"),c)});var o=a(r.default);-1!==o&&i(o,c)}(window,window.document);
},{"./css/main.css":16,"./css/welcome.css":16,"./css/side-menu.css":16,"./css/simulator.css":16,"./doconfig":20}]},{},[13])