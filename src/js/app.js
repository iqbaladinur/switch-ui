const gameListContainer = document.getElementById('gameList');
gameListContainer.addEventListener('wheel', function (event){
  if (event.deltaY > 0) {
    gameListContainer.scrollLeft += 100;
  } else if(event.deltaY < 0) {
    gameListContainer.scrollLeft -= 100;
  }
});

function setClock() {
  const clock = document.getElementById('clockNumber');
  const clockAmPM = document.getElementById('clockAmPm');
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  clock.innerText = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  clockAmPM.innerText = ampm;
  var time = setTimeout(setClock, 500)
}

setClock();