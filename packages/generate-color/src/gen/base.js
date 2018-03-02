export default function (param = {}, colorList = []) {
  const config = Object.assign({
    num: 1,
    opacity: 1,
    prefix: '#',
    format: 'hex', // rgb | rgba | hex | object
    algorithm: ''
  }, param)

  const hex2ten = (hex, start, end) => parseInt(hex.substring(start, end), 16)
  const opacity = config.opacity && config.opacity >= 0 && config.opacity <= 1 ? config.opacity : 1
  let genFunc = null
  switch (config.format) {
    case 'rgb':
      genFunc = (hex) => `rgb(${hex2ten(hex, 0, 2)},${hex2ten(hex, 2, 4)},${hex2ten(hex, 4, 6)})`
      break
    case 'rgba':
      genFunc = (hex) => `rgba(${hex2ten(hex, 0, 2)},${hex2ten(hex, 2, 4)},${hex2ten(hex, 4, 6)}, ${opacity})`
      break
    case 'object':
      genFunc = (hex) => {
        return {
          r: hex2ten(hex, 0, 2),
          g: hex2ten(hex, 2, 4),
          b: hex2ten(hex, 4, 6),
          opacity
        }
      }
      break
    default: // 'hex'
      const prefix = config.prefix === undefined ? '#' : config.prefix
      genFunc = (hex) => `${prefix}${hex}`
  }
  const result = []
  const LEN = colorList.length
  for (let i = 0; i < config.num; i++) {
    result.push(genFunc(colorList[Math.floor(LEN * Math.random())]))
  }

  return result.length > 1 ? result : result[0]
}
