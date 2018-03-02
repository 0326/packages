import { default as genColor, genMaterialColor, genWebColor } from './dist/bundle'
import { webColorList, webColorNames } from './src/gen/web'
import { materialColorList } from './src/gen/material'

function randomColorTpl (max = 10, gen) {
  let tpl = ''
  for (let i = 0; i < max; i++) {
    const color = gen()
    tpl += `<span style="background:${color}">${color}</span>`
  }
  return tpl
}

function genWebColorListTpl (num, list) {
  return list.map((color, i) => `<span style="background:#${color}">${webColorNames[i]}</span>`).join('')
}

function genMColorListTpl (num, list) {
  return list.map((color) => {
    const a = color.split(' #')
    return `<span style="background:color}">${color}</span>`
  }).join('')
}

function renderColors(list) {
  return list.map((color) => {
    return `<span style="background:${color}">${color}</span>`
  }).join('')
}

function appendBox (num, randomCall, gen) {
  const box = document.createElement('div')
  box.classList.add('color-box')
  box.innerHTML = randomCall(num, gen)
  document.body.appendChild(box)
}

// 随机颜色
// appendBox(100, randomColorTpl, genColor)
// 随机 web 标准颜色
// appendBox(100, randomColorTpl, genWebColor)

// 列举所有 web 颜色
// appendBox(webColorList.length, genWebColorListTpl, webColorList)

const wl = genColor({
  num: 100,
  opacity: 0.2
})
const tpl = renderColors(wl)
console.log(tpl)
const box = document.createElement('div')
box.classList.add('color-box')
box.innerHTML = tpl
document.body.appendChild(box)

// 列举所有 material 颜色
// appendBox(materialColorList.length, genMColorListTpl, materialColorList)
