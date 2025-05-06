const currentImage = document.getElementById('current-image')
const thumbnails = document.querySelectorAll('.thumb')

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    // Troca imagem principal
    currentImage.src = thumb.src

    // Atualiza a miniatura ativa
    thumbnails.forEach(t => t.classList.remove('active'))
    thumb.classList.add('active')
  })
})

// ScrollReveal
window.sr = ScrollReveal({ reset: true })

ScrollReveal().reveal('.top-header', {
  duration: 2000,
  rotate: { x: 0, y: 50, z: 0 }
})

ScrollReveal().reveal('.footer', {
  duration: 2000,
  rotate: { x: 0, y: 0, z: 0 }
})

ScrollReveal().reveal('.services-wrapper', {
  duration: 2000
})

ScrollReveal().reveal('.about', {
  duration: 2000
})

ScrollReveal().reveal('.first-section', {
  duration: 2000
})
