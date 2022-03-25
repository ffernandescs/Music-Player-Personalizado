let btnPlay = document.querySelector('.playPause .play');
let music = document.querySelector('audio')
let nameMusic =document.querySelector('.nameMusic');
let nameArtist =document.querySelector('.nameArtista');
let imgMusic = document.querySelector('img');
let prevBtn = document.querySelector('prev');
let nextBtn = document.querySelector('.next');

let openCloseListColor = document.querySelector('.buttonColorBackground');
let openCloseListColor2 = document.querySelector('.buttonColorBackground2');
let container = document.querySelector('.container')
let openCloseLista = document.querySelector('.listMusic')
let barraTime = document.querySelector('.barra') 
let barraProgress = document.querySelector('.timeProgress')
let fecharMenu = document.querySelector('.fechaMenu');
let repeatBtn = document.querySelector('.repeat')
let containerSeconds = document.querySelector('.containerSec');
let containerLogin = document.querySelector('.containerLogin');

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
    music.src = `/../assets/music/${arrayFaixas[numbIndex].src}.mp3`;
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

function playMusicList() {

    if(music.paused) {
        music.play();
        btnPlay.innerHTML = 'pause'
    }
 }




function prevMusic() {
    indexMusic--;
    if(indexMusic < 0){
        indexMusic = 21
    }
    carregarIndex(indexMusic);
    if (music.paused) {
        music.play();
        btnPlay.innerHTML = 'pause'
    }
}

function nextMusic() {
    indexMusic++;
    if(indexMusic > 21){
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
    let timeFinaList = document.querySelector('.timeTextTime')

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


    barraProgress.addEventListener('click', (e)=>{
        let widthProgress = barraProgress.clientWidth;
        let offsetXClick = e.offsetX;
        let durationAudio = music.duration;
        
        music.currentTime = (offsetXClick / widthProgress) * durationAudio;
        playMusicList();
    })  
    
    function repeatMusic() {
        let mudarTextRepeat = repeatBtn.innerText;
    
        switch(mudarTextRepeat){
            case 'repeat':
                repeatBtn.innerText = 'repeat_one';
                repeatBtn.setAttribute('title', 'Audio Looped')
                break;
            case 'repeat_one':
                repeatBtn.innerText = 'shuffle';
                repeatBtn.setAttribute('title', 'Playback shuffle')
                break;
            case 'shuffle':
                repeatBtn.innerText = 'repeat';
                repeatBtn.setAttribute('title', 'Playback Looped');
                break;
    }
    };

    music.addEventListener('ended', ()=>{
        let mudarTextRepeat = repeatBtn.innerText;
    
        switch(mudarTextRepeat){
            case 'repeat':
                nextMusic();
                break;
            case 'repeat_one':
                music.currentTime = 0;
                carregarIndex(indexMusic);
                playMusic();
                break;
            case 'shuffle':
                let aleatorioIndex = Math.floor((Math.random()* arrayFaixas.length) + 1);
                do{
                    aleatorioIndex = Math.floor((Math.random()* arrayFaixas.length) + 1);
                }while (indexMusic == aleatorioIndex); 
                indexMusic = aleatorioIndex;
                carregarIndex(indexMusic);
                playMusic();
                break;
        }
    })

    const ulTag = document.querySelector('.containerList ul');

    for (let i = 0; i<arrayFaixas.length; i++) {
        ulTag.innerHTML += `<li class="numeroFaixa" onclick="playMusicList()">
        <div class="text">
            <p class="">${arrayFaixas[i].name}</p>
            <p class="">${arrayFaixas[i].artista}</p>
        </div>
        <audio id="durationAudio" src="asstes/music/${arrayFaixas[i].src}" ></audio>
        <span class="durationText">1:45</span>
    </li>`

    let textTimeList = document.querySelector('#durationAudio');
    let audioTimeList = document.querySelector('.durationText')

    
    audioTimeList.addEventListener('loadeddata', ()=>{
        let duration = audioTimeList.duration;
        let totalMin = Math.floor(duration / 60);
        let totalSec = Math.floor(duration % 60);
        if(totalSec < 10){ 
        totalSec = '0' + totalSec;
        };
        textTimeList.innerText = totalMin + ':' + totalSec
  });
                                                        
}





function fecharMenuDvi() {
    closeList();
    closeListColor();
   fecharMenu.style = 
   'z-index: -5555;'
}

function fecharMenuDvi2() {
    closeListColor();
    closeList();
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
    container.style = 
        'background-color: #4C336C;'
        'box-shadow: 0px 6px 15px rgb(0,0,0,0.342) ;'
}
function color2() {
    container.style = 
    'background-color: #0e9fff;' +
    'box-shadow: 0px 6px 15px rgb(0,0,0,0.342);'
}
function color3() {
    container.style = 
        'background: linear-gradient(#9ce3ff 0%, #fd878d 90%);' +
        'box-shadow: 0px 6px 15px rgb(0,0,0,0.342);'
}
function color4() {
    container.style = 
        'background-color: #000;' +
        'box-shadow: 0px 6px 15px rgb(0,0,0,0.342);'
}




function logarPage()  {
    containerLogin.style.display = 'none'
    containerSeconds.style.display ='block'
    document.querySelector('.topoTela i').style.display = block
}