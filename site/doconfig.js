import compTpl from '../packages/response-dom/README.md'
import generateColor from '../packages/generate-color/README.md'

const $ = window.jQuery

const pages = {}
Array.from($('#J_Config').find('a')).map(el => {
  pages[el.dataset.name] = el.href
})

const optComponents = [{
  title: '通用模板',
  anchor: 'comp-tpl',
  content: compTpl
}, {
  title: '颜色生成器',
  anchor: 'generate-color',
  src: pages['generate-color'],
  content: generateColor
}, {
  title: 'RPC抽奖',
  anchor: 'rpc-lottery',
  src: pages['rpc-lottery'],
  content: compTpl
}, {
  title: 'RPC发奖',
  anchor: 'rpc-award',
  src: pages['rpc-award'],
  content: compTpl
}, {
  title: '领奖按钮',
  anchor: 'lottery-button',
  src: pages['lottery-button'],
  content: compTpl
}, {
  title: '中奖记录',
  anchor: 'lottery-record',
  src: pages['lottery-record'],
  content: compTpl
}]

export default optComponents
