let btnPlay = document.querySelector('.playPause .play');
let music = document.querySelector('audio')
let nameMusic =document.querySelector('.nameMusic');
let nameArtist =document.querySelector('.nameArtista');
let imgMusic = document.querySelector('img');
let prevBtn = document.querySelector('prev');
let nextBtn = document.querySelector('.next');

let openCloseListColor = document.querySelector('.buttonColorBackground');
let clickFora = document.querySelector('.container')
let openCloseLista = document.querySelector('.listMusic')
let barraTime = document.querySelector('.barra') 
let barraProgress = document.querySelector('.timeProgress')
let fecharMenu = document.querySelector('.fechaMenu');




let indexMusic = 0

document.addEventListener('mousedown', (event) => {
    if(clickFora.contains(event.target)) {
    }
})

window.addEventListener('load', ()=> {
    carregarIndex(indexMusic);
})

function carregarIndex(numbIndex) {
    nameMusic.innerHTML = arrayFaixas[numbIndex].name;
    nameArtist.innerHTML = arrayFaixas[numbIndex].artista;
    imgMusic.src = `assets/img/${arrayFaixas[numbIndex].img}.jpg`;
    music.src = `assets/music/${arrayFaixas[numbIndex].src}.mp3`;

}


function playMusic() {

   if(music.paused) {
       music.play();
       btnPlay.innerHTML = 'pause'


   } else {
       music.pause()
       btnPlay.innerHTML = 'play_arrow'
   }
}

function prevMusic() {
    indexMusic--;
    if(indexMusic < 0){
        indexMusic = 5
    }
    carregarIndex(indexMusic);
    if (music.paused) {
        music.play();
        btnPlay.innerHTML = 'pause'
    }
}

function nextMusic() {
    indexMusic++;
    if(indexMusic > 5){
        indexMusic = 0
    }
    carregarIndex(indexMusic);
    if (music.paused) {
        music.play();
        btnPlay.innerHTML = 'pause'
    }    
}

music.addEventListener('timeupdate', (e) => {
    const durationAudio = e.target.currentTime;
    const secAudio = e.target.duration;
    let resulTimeAudio = (durationAudio / secAudio) * 100;
    barraTime.style.width = resulTimeAudio + '%';

    let timeFinal = document.querySelector('.fim');
    let timeInitial = document.querySelector('.inicio'); 

    music.addEventListener('loadeddata', () => {
        let durationReal = music.duration;
        let totalMin = Math.floor(durationReal / 60);
        let totalSeconds = Math.floor(durationReal % 60);
        if(totalSeconds < 10) {
            totalSeconds = '0' + totalSeconds;
        }
    
        timeFinal.innerHTML = totalMin + ':' + totalSeconds;
    
    });
    
        let minCurrent = Math.floor(durationAudio /60);
        let secCurrent = Math.floor(durationAudio % 60);
        if(secCurrent < 10) {
            secCurrent = '0' + secCurrent;
        }
    
        timeInitial.innerHTML = minCurrent + ':' + secCurrent;
    });



const ulTag = document.querySelector('.containerList ul');

for (let i = 0; i < arrayFaixas.length; i++) {
    let liTag = `<li class="numeroFaixa" onclick="playListFaixa()">
                    <div class="text">
                        <p class="">${arrayFaixas[i].name}</p>
                        <p class="">${arrayFaixas[i].artista}</p>
                    </div>
                    <audio class="${arrayFaixas[i].src}" src="${arrayFaixas[i].src}" ></audio>
                    <span class="timeTextTime">1:45</span>
                </li>`
ulTag.insertAdjacentHTML('beforeend', liTag);




function campoTimeBarra(seconds) {
    let timeMinuto = Math.floor(seconds / 60);
    let timeSeconds = seconds % 60;
    if(timeSeconds < 10) {
        timeSeconds = '0' + timeSeconds;
    }
    return timeMinuto + ':' + timeSeconds;
 }


}

function fecharMenuDvi() {
    closeList();
    closeListColor();
   fecharMenu.style = 
   'z-index: -5555;'
}

function clickList () {
    openCloseLista.style.bottom = '0px';
    openCloseLista.style.opacity ='1';
        fecharMenu.style = 
        'z-index: 0;'
 }

 function closeList () {
    openCloseLista.style.bottom = '-55%';
    openCloseLista.style.opacity ='0';
 }

function closeListColor() {
        openCloseListColor.style.top = '-55%'     
    
}

function mudarColor () {
    openCloseListColor.style.top = '0'
    fecharMenu.style = 
    'z-index: 0;'    
}

function color1() {
    clickFora.style = 
        'background-color: #4C336C;'
        'box-shadow: 0px 6px 15px rgb(0,0,0,0.342) ;'
}
function color2() {
    clickFora.style = 
    'background-color: #0e9fff;' +
    'box-shadow: 0px 6px 15px rgb(0,0,0,0.342);'
}
function color3() {
    clickFora.style = 
        'background: linear-gradient(#9ce3ff 0%, #fd878d 90%);' +
        'box-shadow: 0px 6px 15px rgb(0,0,0,0.342);'
}
function color4() {
    clickFora.style = 
        'background-color: #000;' +
        'box-shadow: 0px 6px 15px rgb(0,0,0,0.342);'
}