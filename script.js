const globalFunction = () => {
  const logo = document.querySelector('.logo')
  const sections = document.querySelectorAll('.sections')
  const section02 = document.querySelector('.section02')

  sections.forEach((section) => {
    section.style.height = `${window.innerHeight}px`
    console.log(section)
  })

  if (document.documentElement.clientWidth < 768) {
    section02.style.height = `${(40 / 100) * window.innerHeight}px`
  } else {
    section02.style.height = `${window.innerHeight}px`
  }

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      logo.src = 'img/section01-logo-mobile.png'
      section02.style.height = `${(40 / 100) * window.innerHeight}px`
    } else {
      logo.src = 'img/section01-logo.png'
      section02.style.height = `${window.innerHeight}px`
    }
  }

  window.onresize = handleResize
}

globalFunction()

// 40%
