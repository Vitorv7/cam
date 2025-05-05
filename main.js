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
