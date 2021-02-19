/*
*/  const keys = document.querySelectorAll('.key')
    const audios = document.querySelectorAll('audio')

window.addEventListener('keydown', function(e) {
    if (e.repeat) {return
    }
    
    
    audios.forEach(audio => {
        if (e.keyCode == audio.getAttribute('data-key')) {
            audio.currentTime = 0;
            audio.play();
        
            
        
        }
    })
    
    keys.forEach(key => {
        if (e.keyCode == key.getAttribute('data-key')) {
            key.classList.add('playing')
        }
    })



})

window.addEventListener('keyup', function(e) {

    keys.forEach(key => {
        if (e.keyCode == key.getAttribute('data-key')) {
            key.classList.remove('playing')
        }
    })
})






   



