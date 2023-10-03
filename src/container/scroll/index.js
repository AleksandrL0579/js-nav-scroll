scroll = () => {
  return window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

window.scroll_batt.onclick = scroll

let isDisplay = false

// function checkScroll() {
//   if (scrollY > window.innerHeight && !isDisplay) {
//     window.scroll_batt.style = 'display: flex'
//     isDisplay = true
//     return null
//   }
//   if (scrollY <= window.innerHeight && isDisplay) {
//     window.scroll_batt.style.display = 'none'
//     isDisplay = false
//     return
//   }
// }

// setInterval(checkScroll, 500)

setInterval(() => {
  if (window.scrollY > innerHeight && isDisplay === false) {
    isDisplay = true
    window.scroll_batt.style.display = 'flex'
    return null
  }

  if (window.scrollY <= innerHeight && isDisplay === true) {
    isDisplay = false
    window.scroll_batt.style.display = 'none'
    return
  }
}, 500)
