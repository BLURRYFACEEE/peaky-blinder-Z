import './infiniteScroll.css'
export function infinityScroll (el, binding) {
  originJS()
  function originJS () {
    // eslint-disable-next-line no-unused-vars
    let scrollTime = 4
    const elClassName = el.className
    // const infinteAreaEle = el
    const infinteAreaEle = document.querySelector(`.${elClassName}`)
    // let infiniteAreaUl = el.childNodes[0].cloneNode(true)
    let infiniteAreaUl = document.querySelectorAll(`.${elClassName} ul`)[0]
    const infiniteAreaUlAll = document.querySelectorAll(`.${elClassName} ul`)
    let ulClone = infiniteAreaUl.cloneNode(true)
    // let ulClone2 = infiniteAreaUl.cloneNode(true)
    if (infiniteAreaUlAll.length > 1) {
      // infiniteAreaUl.remove()
      infinteAreaEle.removeChild(infiniteAreaUlAll[infiniteAreaUlAll.length - 1])
      // console.log('length>1')
      // for (var i = 0; i < infiniteAreaUlAll.length; i++) {
      //   // console.log('infiniteAreaUlAll[i]')
      //   // console.log(infiniteAreaUlAll[i])
      //   infinteAreaEle.removeChild(infiniteAreaUlAll[i])
      // }
      // infinteAreaEle.append(ulClone)
    }
    infinteAreaEle.append(ulClone)
    // infinteAreaEle.append(ulClone)
    infinteScroll(scrollTime)
    function infinteScroll (setTime = 5) {
      infiniteAreaUl = el.childNodes[0]
      const infiniteAreaUlStyle = window.getComputedStyle(infiniteAreaUl, null)
      const infinteAreaEleStyle = window.getComputedStyle(infinteAreaEle, null)
      let ulHeight = infiniteAreaUlStyle.height
      let liMargin = infiniteAreaUlStyle.marginTop
      let infinteAreaHeight = infinteAreaEleStyle.height
      liMargin = liMargin.split('px')[0]
      ulHeight = ulHeight.split('px')[0]
      infinteAreaHeight = infinteAreaHeight.split('px')[0]
      let finalTranslateY = parseInt(ulHeight) + parseInt(liMargin)
      checkFakeAppend()
      // eslint-disable-next-line no-unused-vars
      function checkFakeAppend () {
        // console.log(ulHeight)
        // console.log(liMargin)
        // console.log(finalTranslateY)
        // console.log(infinteAreaHeight)
        if (parseInt(ulHeight) * 2 - parseInt(finalTranslateY) < parseInt(infinteAreaHeight)) {
          console.log('hahahha')
          const appendTimes = Math.floor(infinteAreaHeight / ulHeight)
          for (var i = 0; i < appendTimes; i++) {
            // const ulClone = infiniteAreaUl.cloneNode(true)
            infinteAreaEle.append(ulClone)
          }
        }
      }
      // 默认负数（向上）
      finalTranslateY = -(parseInt(ulHeight) + parseInt(liMargin)) + 'px'
      const ulSetRollTimes = document.querySelectorAll('.infinteArea ul').length
      for (var i = 0; i < ulSetRollTimes; i++) {
        document.querySelectorAll('.infinteArea ul')[i].style.setProperty('--finalTranslateY', finalTranslateY)
      }
    }
  }
}
