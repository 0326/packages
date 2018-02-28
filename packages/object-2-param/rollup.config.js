import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import ejs from 'rollup-plugin-ejs';
import strip from 'rollup-plugin-strip';
import uglify from 'rollup-plugin-uglify';
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/mod.js',
  output: {
    name: '@alipay/lottery-dialog',
    file: 'dist/bundle.js',
    format: 'umd'
  },
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  },
  plugins: [
    /**
     * JS 中使用 .css/less/scss，browserslist 配置在 package.json 中
     * https://github.com/egoist/rollup-plugin-postcss
     */
    postcss({
      plugins: [
        autoprefixer()
      ]
    }),
    /**
     * JS 中使用 ejs模板
     * https://github.com/trofima/rollup-plugin-ejs#usage
     */
    ejs(),
    /**
     * 允许使用 node_modules 中的 nodejs 模块
     * https://github.com/rollup/rollup-plugin-node-resolve
     */
    resolve({
      jsnext: true,
      main: true
    }),
    /**
     * 将 commonjs 转换为 es6 模块，便于 rollup 打包
     * https://github.com/rollup/rollup-plugin-commonjs
     */
    commonjs(),
    /**
     * babel 编译，配置 .babelrc
     * https://github.com/rollup/rollup-plugin-babel
     */
    babel({
      exclude: 'node_modules/**'
    }),
    /**
     * 去除代码中的debugger、console.log
     * https://github.com/rollup/rollup-plugin-strip
     */
    strip({
      debugger: true,
      functions: [ 'console.log', 'assert.*', 'debug', 'alert' ]
    }),
    /**
     * https://github.com/TrySound/rollup-plugin-uglify
     */
    uglify(),
  ]
};
