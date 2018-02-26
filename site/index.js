import './css/main.css'
import './css/welcome.css'
import './css/side-menu.css'
import './css/simulator.css'

import optComponents from './doconfig'

const $ = window.jQuery

$('#J_fullscreen').on('click', (e) => {
  const href = $(e.target).data('href')
  if (href) {
    window.open(href)
  } else {
    $(e.currentTarget).addClass('animated-zoom-out')
    setTimeout(() => {
      $(e.currentTarget).remove()
    }, 1000)
  }
})

function renderMenu ($menu) {
  let selectedIndex = getSelectedAnchorIndex(optComponents)
  selectedIndex = selectedIndex === -1 ? 0 : selectedIndex
  const tpl = optComponents.map((item, index) => {
    const cls = index === selectedIndex ? 'pure-menu-item pure-menu-selected' : 'pure-menu-item'
    return `<li class="${cls}" data-src="${item.src}" data-index="${index}">
    <a href="#${item.anchor}" class="pure-menu-link">${item.title}</a>
  </li>`
  }).join('')

  $menu.find('.pure-menu-list')[0].innerHTML = tpl
}

function renderContent (index, $content) {
  const data = optComponents[index] || {}
  $content.html(data.content)

  if (data.src) {
    $('#simulator').find('iframe')[0].src = data.src
    $('#simulator').show()
  } else {
    $('#simulator').hide()
  }
  // 重新初始化代码高亮
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block)
  })
}

function getSelectedAnchorIndex (list) {
  const anchor = location.hash.substr(1)
  if (anchor) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].anchor === anchor) {
        return i
      }
    }
  }
  return -1
}

(function (window, document) {
  // const $layout = $('#layout')
  const $menu = $('#menu')
  // const $menuLink = $('#menuLink')
  const $content = $('#main')

  renderMenu($menu)

  $menu.on('click', '.pure-menu-item', (e) => {
    const $curr = $(e.currentTarget)
    // console.log(e.currentTarget);
    $menu.find('.pure-menu-selected').removeClass('pure-menu-selected')
    $curr.addClass('pure-menu-selected')

    renderContent($curr.data('index'), $content)
  })

  const selectedIndex = getSelectedAnchorIndex(optComponents)
  if (selectedIndex !== -1) {
    renderContent(selectedIndex, $content)
  }
}(window, window.document))
