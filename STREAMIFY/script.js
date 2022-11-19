console.log('WELCOME to Streamify');
//intitalize variable
let songindex = 0;
let audioelement = new Audio('songs/0.mp3');
let masterplay = document.getElementById('masterplay');
let heart = document.getElementById('heart');
let myrange = document.getElementById('myRange');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let slidername=document.getElementById('slidername');
let sliderimg=document.getElementById('sliderimg');
let volumeslider=document.getElementById('volumeslider');
let gif=document.getElementById('gif');
console.log(gif);
let songs = [
    { songname: "Jhoom", filepath: "songs/0.mp3", coverpath: "covers/jhoom.jpg" },
    { songname: "Kesariya", filepath: "songs/1.mp3", coverpath: "covers/kesariya.jfif" },
    { songname: "Ranjha", filepath: "songs/2.mp3", coverpath: "covers/ranjha.jfif" },
    { songname: "chidiya", filepath: "songs/3.mp3", coverpath: "covers/chidiya.jpg" },
    { songname: "Ranjhana", filepath: "songs/4.mp3", coverpath: "covers/ranjhana.jpg" },
    { songname: "Saudebaazi", filepath: "songs/5.mp3", coverpath: "covers/saudebazi.jpg" },

]

// songitems.forEach((element,i)=>{
// element.getElementsByTagName('img')[0].src=songs[i].coverpath;
// })
//handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        gif.style.opacity=1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        gif.style.opacity=0;
    }
})
var flag=0;
heart.addEventListener('click', () => {
   
    if(flag==0){
        heart.classList.remove('fa-regular');
    heart.classList.add('fa-solid');
    flag=1;
    }
    else if(flag==1){
        heart.classList.remove('fa-solid');
        heart.classList.add('fa-regular');
        flag=0;
    }
})
//listen to events
audioelement.addEventListener('timeupdate', () => {
    //updateslider

    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);

    myrange.value = progress;

})

myrange.addEventListener('change', () => {
    audioelement.currentTime = (myrange.value * audioelement.duration) / 100
})

volumeslider.addEventListener('change',()=>{
    audioelement.volume=volumeslider.value/100;

})
const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitem')).forEach((element) => {
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
    }
    )
}

Array.from(document.getElementsByClassName('songitem')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        songindex = parseInt(e.target.id);
        slidername.innerText=songs[songindex].songname;
        sliderimg.src=songs[songindex].coverpath;
        audioelement.src = `songs/${songindex}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");

    })

})

//previous and next controls

document.getElementById("next").addEventListener('click',()=>{
    if(songindex>=5){
        songindex=0;

    }
    else{
        songindex+=1
        
    }
   
    slidername.innerText=songs[songindex].songname;
    sliderimg.src=songs[songindex].coverpath;
    audioelement.src = `songs/${songindex}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");

})


document.getElementById("previous").addEventListener('click',()=>{
    if(songindex<=0){
        songindex=5;
    }
    else{
        songindex-=1
    }
    slidername.innerText=songs[songindex].songname;
    sliderimg.src=songs[songindex].coverpath;
    audioelement.src = `songs/${songindex}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");

})

