function playSound (idElementAudio) {
    const element = document.querySelector(idElementAudio);

    if (element != null && element.localName === 'audio') {
            element.play();
        } else {
            console.log("Sorry, element not founded!");
        }
};

const keyboardList = document.querySelectorAll('.keyboard');


keyboardList.forEach(it => it.onclick = () => playSound(`#sound_${it.classList[1]}`));

