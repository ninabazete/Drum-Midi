function playSound (idElementAudio) {
    document.querySelector(idElementAudio).play();
};

const keyboardList = document.querySelectorAll('.keyboard');


keyboardList.forEach(it => it.onclick = () => playSound(`#sound_${it.classList[1]}`));
