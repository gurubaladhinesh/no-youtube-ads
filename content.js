function init() {
  const videoTags = document.getElementsByTagName("video");
  if (videoTags != undefined && videoTags.length == 1) {
    adCheck();
    videoTags[0].addEventListener("play", adCheck)
    
  }
}

function adCheck(){
    const player = document.getElementById("movie_player");
    if (player != undefined && player.classList.value.includes(" ad-showing")) {
      window.location.reload();
    }
}

window.addEventListener ("load", init);
