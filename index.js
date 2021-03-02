(function () {
  drawConstellations();
  window.addEventListener("resize", reset, true);
  emailjs.init("user_df4WjKZcTR2tXhjd6Li2R");
  emailForm();
})();

function drawConstellations() {
  makeConstellations();
  positionConstellations();
  makeDots();
  positionDots();
}

function makeConstellations() {
  var bg = document.querySelector(".background");
  for (let i = 0; i < 60; i++) {
    var width = getRandomNum(8, 15);
    var height = getRandomNum(12, 19);
    var constellation = document.createElement("div");
    constellation.className = `constellations`;
    constellation.id = `constellation-${i}`;
    constellation.style.width = `${width}em`;
    constellation.style.height = `${height}em`;
    bg.appendChild(constellation);
  }
}

function makeDots() {
  var constellations = document.querySelectorAll(".constellations");
  constellations.forEach((constellation) => {
    var numDots = getRandomNum(4, 10);
    for (let i = 0; i < numDots; i++) {
      var size = getRandomNum(2, 5);
      var dot = document.createElement("div");
      var delay = getRandomNum(0, 1);
      dot.className = `dots`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.animationDelay = `${delay}s`;
      constellation.appendChild(dot);
    }
  });
  var dots = document.querySelectorAll(".dots");
  for (let i = 0; i < dots.length; i++) {
    var dot = dots[i];
    dot.id = `dot-${i}`;
  }
}

function positionConstellations() {
  var bg = document.querySelector(".background");
  var width = bg.getBoundingClientRect().width;
  var height = bg.getBoundingClientRect().height;
  var constellations = document.getElementsByClassName("constellations");
  for (let i = 0; i < constellations.length; i++) {
    var x = getRandomNum(0, width);
    var y = getRandomNum(0, height);
    var constellation = document.getElementById(`constellation-${i}`);
    constellation.style.left = `${x}px`;
    constellation.style.top = `${y}px`;
    constellation.style.position = "absolute";
  }
}

function positionDots() {
  var constellations = document.querySelectorAll(".constellations");
  constellations.forEach((constellation) => {
    var width = constellation.getBoundingClientRect().width;
    var height = constellation.getBoundingClientRect().height;
    var dots = document.getElementsByClassName("dots");
    for (let i = 0; i < dots.length; i++) {
      var x = getRandomNum(0, width);
      var y = getRandomNum(0, height);
      var dot = document.getElementById(`dot-${i}`);
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.position = "relative";
    }
  });
}

function getRandomNum(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function reset() {
  positionConstellations();
  positionDots();
}

function emailForm() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("gmail", "contact_form", this).then(
        function () {
          var p = document.getElementById('error');
          p.innerHTML = 'Email sent successfully'
        },
        function (error) {
          var p = document.getElementById("error");
          p.innerHTML = error;
        }
      );
      event.target.reset();
    });
}
