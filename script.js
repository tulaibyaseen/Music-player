let arr = [
  {songName:'Subhanallah-Walhamdulillah',url:'./Audio&Images/Subhanallah-Walhamdulillah_320(PagalWorld).mp3',img:'./Audio&Images/5403_4.jpg'},
  {songName:'Kali Kali Zulfon Pe',url:'./Audio&Images/Kali Kali Zulfon Ke Phande Na Dalo-(PagalWorld).mp3',img:'./Audio&Images/images.jpg'},
  {songName:'Kun Faya Kun',url:'./Audio&Images/Kun Faaya Kun Rockstar 320 Kbps.mp3',img:'./Audio&Images/Kun-Faaya-Kun-Rockstar-500-500.jpg'},
  {songName:'MUHAMMAD (S.A.W) NABIYNA ',url:'./Audio&Images/MUHAMMAD (S.A.W) NABIYNA - Arabic Naat.mp3',img:'./Audio&Images/maxresdefault.jpg'},
]


let audio = new Audio()
let allSongs = document.querySelector('#all-songs') 
let poster = document.querySelector('#left')   
let play = document.querySelector('#play')
let backward = document.querySelector('#backward')
let forward = document.querySelector('#forward')


let selectedSong = 0

function mainFunction() {
  let clutter = ''

arr.forEach(function (elem,index) {
  clutter += ` <div class="song-card" id=${index}>
  <div class="part1">
    <img src=${elem.img} >
    <h2>${elem.songName}</h2>
  </div>
  <h6>3.56</h6>
</div>`
})
audio.src = arr[selectedSong].url
allSongs.innerHTML = clutter

poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener('click',function (dets) {
  selectedSong = dets.target.id
  play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
  mainFunction()
  flag = 1
  audio.play()
})

var flag = 0

play.addEventListener('click',function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    audio.play()
    flag = 1

  }else{
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`
    audio.pause()

    flag = 0
  }
})

forward.addEventListener('click',function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++
    mainFunction()

    audio.play()
  }else{
    forward.style.opacity = 0.4
  }
})

backward.addEventListener('click',function () {
  if (selectedSong > 0) {
    selectedSong--
    mainFunction()
    audio.play()
  }else{
    backward.style.opacity = 0.4
  }
})