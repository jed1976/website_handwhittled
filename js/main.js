(() => {
  const scrollTop = document.getElementById('scroll-top')
  let scrollTopActive = false

  document.onclick = (e) => {
    if (e.target.nodeName !== 'A') return

    const hash = e.target.getAttribute('href', 1)
    if (hash.substr(0, 1) !== '#') return

    e.preventDefault()
    const target = document.getElementById(hash.replace('#', ''))

    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: target.offsetTop
    })
  }

  document.ontouchstart = () => {}

  scrollTop.onclick = (e) => {
    e.preventDefault()

    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: 0
    })
  }

  window.onscroll = (e) => {
    if (document.scrollingElement.scrollTop > window.innerHeight) {
      if (scrollTopActive === false) {
        scrollTopActive = true
        scrollTop.classList.toggle('active')
      }
    } else {
      if (scrollTopActive) {
        scrollTopActive = false
        scrollTop.classList.toggle('active')
      }
    }
  }

  setTimeout(() => document.body.classList.add('loaded'), 1)
})()