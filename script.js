console.log("Welcome To FootStudio")
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let Myprogressbar = document.getElementById('Myprogressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"K'NAAN - Wavin' Flag (Coca-Cola Celebration Mix)",filepath:"1.mp3",coverpath:"1.jpeg"},
    {songName:"Chawki - Time Of Our Lives ",filepath:"songs/2.mp3",coverpath:"2.jpeg"},
    {songName:"MAGIC SYSTEM - Magic In The Air Feat. Chawki",filepath:"3.mp3",coverpath:"3.jpeg"},
    {songName:"Shakira - Waka Waka (The Official 2010 FIFA World Cup™ Song)",filepath:"4.mp3",coverpath:"4.jpeg"},
    {songName:"Live It Up (Official Video) - Nicky Jam (FWC2k18)",filepath:"5.mp3",coverpath:"5.jpg"},
    {songName:"Shakira - La La La (Brazil 2014) ft.CarlinhosBrown",filepath:"6.mp3",coverpath:"6.jpeg"},
    {songName:"We Are One-Pitbull [The Official 2014 FWC Song]",filepath:"7.mp3",coverpath:"7.jpeg"},
    {songName:"Jason Derulo - Colors  [Coca-Cola Anthem for the 2k18 FWC]",filepath:"8.mp3",coverpath:"8.jpeg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


    

masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1;
}
else{   audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
}
})
audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);

MyProgressbar.value=progress;
})
MyProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=MyProgressbar.value*audioElement.duration/100;
    
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play-circle');

        audioElement.src = '3.mp3';
        
        audioElement.currentTime = 0;
        audioElement.play();
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
})
