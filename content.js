function init(element) {
  if (element) {
    adCheck();
    element.addEventListener("play", adCheck);
  }
}

function adCheck() {
  const player = document.getElementById("movie_player");
  if (player != undefined && player.classList.value.includes(" ad-showing")) {
    window.location.reload();
  }
}

function waitForElementToExist(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}

waitForElementToExist("video").then((element) => {
  init(element);
});
