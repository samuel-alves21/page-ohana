const globalFunction = () => {
  const logo = document.querySelector('.logo')

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      logo.src = 'img/section01-logo-mobile.png'
    } else {
      logo.src = 'img/section01-logo.png'
    }
  }

  window.onresize = handleResize
}

globalFunction()
