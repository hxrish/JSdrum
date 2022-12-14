window.addEventListener('keydown', playsound);

function playsound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let keyclass = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!keyclass) return;

    keyclass.classList.add('playing');

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
}

let keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(element => element.addEventListener('transitionend', removeTransition))

function removeTransition(e){
    // if (e.propertyName !== 'tranform') return
    e.target.classList.remove('playing');
}


