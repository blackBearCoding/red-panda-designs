(function () {
  bindEvents();
})();

function bindEvents() {
  var links = document.querySelectorAll(".links > a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", switchCards);
  }
}

function switchCards(e) {
  var cards = document.querySelectorAll(".examples > div");

  for (let i = 0; i < cards.length; i++) {
    var style = cards[i].getAttribute("style");
    if (style !== null) {
      cards[i].setAttribute("style", "opacity:0; display: none;");
    }
  }
  var card = e.target.id;
  var elem = document.querySelector(`.${card}`);
  elem.animate(
    [
      { opacity: 0 },
      {
        opacity: 1,
      },
    ],
    {
      duration: 1000,
      iterations: 1,
      direction: "normal",
    }
  );
  elem.setAttribute("style", "opacity: 1; display:block;");
}
