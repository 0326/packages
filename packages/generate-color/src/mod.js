
import gen from './gen/base'
import genMaterial from './gen/material'
import genWeb from './gen/web'

export const genMaterialColor = genMaterial
export const genWebColor = genWeb

function getRandomColors (num = 1) {
  const result = []
  for (let i = 0; i < num; i++) {
    result.push(Math.round(16777215 * Math.random()).toString(16))
  }
  return result
}

export default function (param) {
  return typeof param === 'object' ? gen(param, getRandomColors(param.num))
    : `#${getRandomColors()[0]}`
}
