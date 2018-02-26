import compTpl from '../modules/response-dom/README.md'

const $ = window.Zepto

const pages = {}
Array.from($('#J_Config').find('a')).map(el => {
  pages[el.dataset.name] = el.href
})

const optComponents = [{
  title: '通用模板',
  anchor: 'comp-tpl',
  content: compTpl
}, {
  title: '抽奖弹窗',
  anchor: 'lottery-dialog',
  src: pages['lottery-dialog'],
  content: compTpl
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
