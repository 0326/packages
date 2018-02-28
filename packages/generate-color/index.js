export default function Vue ({ data = {}, el = '' } = {}) {
  this.data = {}
  const compiler = ($node) => {
    if (!$node) return
    watcher($node, 'v-text')
    for (let $child of $node.children) {
      compiler($child)
    }
  }
  const watcher = ($node, directive) => {
    const key = $node.getAttribute(directive)
    key && ($node.innerText = data[key]) && Object.defineProperty(this.data, key, {
      configurable: true,
      enumerable: true,
      get: () => data[key],
      set: val => {
        data[key] = $node.innerText = val
      }
    })
  }
  compiler(document.getElementById(el))
}
