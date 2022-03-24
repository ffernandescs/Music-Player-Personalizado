let btnPlay = document.querySelector('.playPause .play');
let music = document.querySelector('audio')
let nameMusic =document.querySelector('.nameMusic');
let nameArtist =document.querySelector('.nameArtista');
let imgMusic = document.querySelector('img');
let prevBtn = document.querySelector('prev');
let nextBtn = document.querySelector('.next');
let timeFinal = document.querySelector('.fim');
let numberFaixa = document.querySelector('.numeroFaixa');



music.addEventListener('timeupdate',timeMusic )

let indexMusic = 0;

window.addEventListener('load', ()=> {
    loadMusic(indexMusic);
});

function playMusic() {

   if(music.paused) {
       music.play();
       btnPlay.innerHTML = 'pause'


   } else {
       music.pause()
       btnPlay.innerHTML = 'play_arrow'
   }
}

function loadMusic(indexNumb) {
    nameMusic.innerHTML = listaMusic[indexNumb].name;
    nameArtist.innerHTML = listaMusic[indexNumb].artist;
    imgMusic.src = listaMusic[indexNumb].img;
    music.src = listaMusic[indexNumb].src;
    
}

function prevMusic () {
    indexMusic--;
    if(indexMusic < 0){
        indexMusic = 5
    } 
    loadMusic(indexMusic);
    if(music.paused) {
        music.play();
        btnPlay.innerHTML = 'pause'

    } else {
        btnPlay.innerHTML = 'play_arrow'
    }
}

function nextMusic () {
    indexMusic++;
    if(indexMusic > 5){
        indexMusic = 0
    } 
    loadMusic(indexMusic);
    if(music.paused) {
        music.play();
        btnPlay.innerHTML = 'pause'
    } else {
        btnPlay.innerHTML = 'play_arrow'
    }
 }

 function timeMusic() {
    let barraTime = document.querySelector('.barra') 
    barraTime.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let timeInitial = document.querySelector('.inicio');
    timeInitial.innerHTML = campoTimeBarra(Math.floor(music.currentTime));
    timeFinal.textContent = campoTimeBarra(Math.floor(music.duration));

 }

 function campoTimeBarra(seconds) {
    let timeMinuto = Math.floor(seconds / 60);
    let timeSeconds = seconds % 60;
    if(timeSeconds < 10) {
        timeSeconds = '0' + timeSeconds;
    }
    return timeMinuto + ':' + timeSeconds;
 }

 function clickList () {
    let btnList = document.querySelector('.listMusic')
    btnList.style.bottom = '0px';
    btnList.style.opacity ='1';
 }
 function closeList () {
    let closeLista = document.querySelector('.listMusic')
    closeLista.style.bottom = '-55%';
    closeLista.style.opacity ='0';
 }

const ulTag = document.querySelector('.containerList ul');

for (let i = 0; i < listaMusic.length; i++) {
    let liTag = `<li class="numeroFaixa" onclick="playListFaixa()">
                    <div class="text">
                        <p class="">${listaMusic[i].name}</p>
                        <p class="">${listaMusic[i].artist}</p>
                    </div>
                    <audio class="${listaMusic[i].src}" src="${listaMusic[i].src}" ></audio>
                    <span id="${listaMusic[i].src}">1:45</span>
                </li>`
ulTag.insertAdjacentHTML('beforeend', liTag);

}

function playListFaixa() {

    if(music.paused) {
        music.play();
        btnPlay.innerHTML = 'pause'
 
 
    }
     let closeLista = document.querySelector('.listMusic')
    closeLista.style.bottom = '-55%';
    closeLista.style.opacity ='0';

}