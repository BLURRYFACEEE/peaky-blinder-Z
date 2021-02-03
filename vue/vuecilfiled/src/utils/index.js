export function scrollDeal (el, bindingValue) {
  el.addEventListener('click', function (e) {
    window.scrollTo(0, 0)
  })
  window.scrollDeal = Object.assign({}, {
    el
  })
  el.style.transition = 'all 1s linear'
  if (bindingValue === 'display') {
    el.style.display = 'none'
    window.addEventListener('scroll', scrollTopADisplay)
  } else {
    el.style.opacity = '0'
    window.addEventListener('scroll', scrollTopAOpacity)
  }
}
function scrollTopADisplay (e) {
  let eToTop = e.target.scrollingElement.scrollTop // 获取页面滚动高度
  let pageHeight = e.target.scrollingElement.clientHeight
  let isShow = eToTop > pageHeight
  window.scrollDeal.el.style.display = isShow ? 'block' : 'none'
}
function scrollTopAOpacity (e) {
  let eToTop = e.target.scrollingElement.scrollTop // 获取页面滚动高度
  let pageHeight = e.target.scrollingElement.clientHeight
  let isShow = eToTop > pageHeight
  window.scrollDeal.el.style.opacity = isShow ? '1' : '0'
}

export function exileScroll () {
  window.removeEventListener('scroll', scrollTopADisplay)
  window.removeEventListener('scroll', scrollTopAOpacity)
}
// 自定义指令异步普通版
export function defaultSrc (el) {
  window.defaultSrcObj = Object.assign({}, {
    el: el,
    imgDefaultURL: require('@/assets/logo.png')
  })
  window.defaultSrcObj.el.addEventListener('error', nameDefaultSrc)
}
function nameDefaultSrc (e) {
  e.target.src = `${window.defaultSrcObj.imgDefaultURL}`
  window.defaultSrcObj.el.removeEventListener('error', nameDefaultSrc)
  window.defaultSrcObj = null
}
// 自定义指令异步升级版 可以自定义默认路径~
export async function imgSrcDefault (el, binding) {
  var imgSrc = binding.value
  const res = await isGoodSrc(imgSrc)
  if (res) el.setAttribute('src', binding.value)
}
function isGoodSrc (imgSrc) {
  return new Promise((resolve, reject) => {
    var img = new Image()
    img.src = imgSrc
    img.onload = function () {
      resolve(true)
      img = null
    }
    img.onerror = function () {
      resolve(false)
      img = null
    }
  })
}
// export function infinityScroll (el, binding) {
//   console.log(el)
//   originJS()
//   function originJS () {
//     let scrollTime = 4
//     const elClassName = el.className
//     console.log(elClassName)
//     const infinteAreaEle = document.querySelector(`.${elClassName}`)
//     // const changTimeSubEle = document.querySelector('#changTimeSub')
//     // const changeTime = document.querySelector('#changTime')
//     const infiniteAreaUl = document.querySelector(`.${elClassName} ul`)
//     const ulClone = infiniteAreaUl.cloneNode(true)
//     infinteAreaEle.append(ulClone)
//     console.log(infiniteAreaUl)
//
//     const infinteAreaEleASon = `
//       .infinteArea {
//       width: 400px;
//       height: 200px;
//       position: absolute;
//       top: 0;
//       bottom: 0;
//       left: 0;
//       right: 0;
//       margin: auto;
//       outline: 16px solid #9dffef;
//       overflow: hidden;
//     }
//     .infinteArea ul {
//       list-style: cjk-ideographic;
//       margin:16px 0;
//       animation: 4s ulUp linear infinite normal;
//     }
//     .infinteArea ul li {
//       margin-top: 10px;
//       line-height: 40px;
//       background-color: #d1e7dd;
//     }
//     `
//     // 创建style标签
//     const style = document.createElement('style')
//     // 设置style属性
//     style.type = 'text/css'
//     // 将 keyframes样式写入style内
//     style.innerHTML = infinteAreaEleASon
//     // 将style样式存放到head标签
//     document.querySelector('head').appendChild(style)
//
//     // changTimeSubEle.onclick = function () {
//     //   scrollTime = changeTime.value || 4
//     //   infinteScroll(scrollTime)
//     // }
//     infinteScroll(scrollTime)
//     function infinteScroll (setTime = 5) {
//       const infiniteAreaUlStyle = window.getComputedStyle(infiniteAreaUl, null)
//       const infinteAreaEleStyle = window.getComputedStyle(infinteAreaEle, null)
//       let ulHeight = infiniteAreaUlStyle.height
//       let liMargin = infiniteAreaUlStyle.marginTop
//       let infinteAreaHeight = infinteAreaEleStyle.height
//       liMargin = liMargin.split('px')[0]
//       ulHeight = ulHeight.split('px')[0]
//       console.log(liMargin)
//       console.log(ulHeight)
//       infinteAreaHeight = infinteAreaHeight.split('px')[0]
//       const finalTranslateY = parseInt(ulHeight) + parseInt(liMargin)
//       // console.log(finalTranslateY)
//       const animation = `.infinteArea ul {
//       animation: ${setTime}s ulUp linear infinite normal;
//     }
// @keyframes ulUp{
//     0%{
//     transform: translateY(0);
//     }
//     100%{
//     transform: translateY(-${finalTranslateY}px);
//     }
//     var（--roll-y）
//     js
//     el.style.setProperty('--roll-y', )
// }`
// // 创建style标签
//       const style = document.createElement('style')
//       // 设置style属性
//       style.type = 'text/css'
//       // 将 keyframes样式写入style内
//       style.innerHTML = animation
//       // 将style样式存放到head标签
//       document.querySelector('head').appendChild(style)
//       checkFakeAppend()
//       function checkFakeAppend () {
//         if (parseInt(ulHeight) * 2 - parseInt(finalTranslateY) < parseInt(infinteAreaHeight)) {
//           const appendTimes = Math.floor(infinteAreaHeight / ulHeight)
//           console.log(appendTimes)
//           for (var i = 0; i < appendTimes; i++) {
//             console.log('haha')
//             const ulClone = infiniteAreaUl.cloneNode(true)
//             infinteAreaEle.append(ulClone)
//           }
//         }
//       }
//     }
//   }
// }
