
import genMaterial from './gen/material'
import genWeb from './gen/web'

export const genMaterialColor = genMaterial
export const genWebColor = genWeb
export default function (param) {
  if (typeof param === 'object') {
    const config = Object.assign({}, param)
  } else {
    const hex = Math.round(16777215 * Math.random()).toString(16)
    return `#${hex}`
  }
}
