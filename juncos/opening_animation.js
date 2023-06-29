const BACKGROUND = document.createElement("div");
BACKGROUND.id = "background";

const ANIMATION_BOX = document.createElement("div");
ANIMATION_BOX.id = "animation_box";
BACKGROUND.appendChild(ANIMATION_BOX);

const CURSOR = document.createElement("div");
CURSOR.id = "cursor";
ANIMATION_BOX.appendChild(CURSOR);

const TYPESPACE = document.createElement("div");
TYPESPACE.id = "typespace";
ANIMATION_BOX.appendChild(TYPESPACE);

const POWER = document.createElement("div");
POWER.id = "power";
TYPESPACE.appendChild(POWER);

const PIXEL_CONTAINER_POWER = document.createElement("div");
PIXEL_CONTAINER_POWER.className = "pixel_container";
POWER.appendChild(PIXEL_CONTAINER_POWER);

PIXEL_CONTAINER_POWER.insertAdjacentHTML('beforeend', `
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel"></div>
  <div class="pixel white of_f"></div>
  <div class="pixel white of_f"></div>
  <div class="pixel white of_f"></div>
  <div class="pixel white of_f"></div>
  <div class="pixel white of_f"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel"></div>
  <div class="pixel white of_f"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel"></div>
  <div class="pixel white of_f"></div>
  <div class="pixel white of_f"></div>
  <div class="pixel white of_f"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel"></div>
  <div class="pixel white of_f"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_p"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel green power_o"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel green power_w"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel green power_e"></div>
  <div class="pixel"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel green power_r"></div>
  <div class="pixel"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel white of_o"></div>
  <div class="pixel"></div>
  <div class="pixel white of_f"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  `);

const SPACE_CONTAINER = document.createElement("div");
SPACE_CONTAINER.id = "space_container";
TYPESPACE.appendChild(SPACE_CONTAINER);

const PEOPLE = document.createElement("div");
PEOPLE.id = "people";
TYPESPACE.appendChild(PEOPLE);

const PIXEL_CONTAINER_PEOPLE = document.createElement("div");
PIXEL_CONTAINER_PEOPLE.className = "pixel_container";
PEOPLE.appendChild(PIXEL_CONTAINER_PEOPLE);

PIXEL_CONTAINER_PEOPLE.insertAdjacentHTML('beforeend', `
  <div class="pixel gray the_t"></div>
  <div class="pixel gray the_t"></div>
  <div class="pixel gray the_t"></div>
  <div class="pixel gray the_t"></div>
  <div class="pixel gray the_t"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_l"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_t"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_l"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_t"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_l"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_t"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_l"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_t"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_h"></div>
  <div class="pixel"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel gray the_e"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel people_green people_e"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel people_green people_o"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_p2"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_l"></div>
  <div class="pixel people_green people_l"></div>
  <div class="pixel people_green people_l"></div>
  <div class="pixel people_green people_l"></div>
  <div class="pixel people_green people_l"></div>
  <div class="pixel"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel people_green people_e2"></div>
  <div class="pixel people_green people_e2"></div>
  `);

document.body.appendChild(BACKGROUND);

initial_animation = false;

var background = document.getElementById('background');
var title = document.getElementById('title');
var power = document.getElementById('power');
var people = document.getElementById('people');
var cursor = document.getElementById('cursor');

var peopleStyles = window.getComputedStyle(people);
var peopleposition = peopleStyles.getPropertyValue('height');
var animationId_people;
var current_position_people = 0;

window.addEventListener('load', function() {

  var powerElement = document.getElementById('power');
  var peopleElement = document.getElementById('people');
  var spaceElement = document.getElementById('space_container');
  var cursor = document.getElementById('cursor');
  var prevWidth = window.innerWidth;
  var prevHeight = window.innerHeight;

  var powerWidth = powerElement.offsetWidth;
  var newHeight = (powerWidth / 53) * 5;
  powerElement.style.height = newHeight + 'px';

  if (initial_animation === true) {

    var peopleWidth = peopleElement.offsetWidth;
    var newHeight2 = (peopleWidth / 53) * 5;
    peopleElement.style.height = newHeight2 + 'px';

  }

  var spaceWidth = spaceElement.offsetWidth;
  var newHeight3 = spaceWidth / 53;
  spaceElement.style.height = newHeight3 + 'px';
  cursor.style.height = newHeight + 'px';
  cursor.style.width = (newHeight / 18) + 'px';
  
});

window.addEventListener('resize', function() {
  if (initial_animation === false) {
    var powerElement = document.getElementById('power');
    var peopleElement = document.getElementById('people');
    var spaceElement = document.getElementById('space_container');
    var cursor = document.getElementById('cursor');
    var prevWidth = window.innerWidth;
    var prevHeight = window.innerHeight;

    window.addEventListener('resize', function() {
      var currentWidth = window.innerWidth;
      var currentHeight = window.innerHeight;

      if (currentWidth !== prevWidth) {
        
        var powerWidth = powerElement.offsetWidth;
        var newHeight = (powerWidth / 53) * 5;
        powerElement.style.height = newHeight + 'px';

        if (initial_animation === true) {

          var peopleWidth = peopleElement.offsetWidth;
          var newHeight2 = (peopleWidth / 53) * 5;
          peopleElement.style.height = newHeight2 + 'px';

        }

        var spaceWidth = spaceElement.offsetWidth;
        var newHeight3 = spaceWidth / 53;
        spaceElement.style.height = newHeight3 + 'px';
        cursor.style.height = newHeight + 'px';
        cursor.style.width = (newHeight / 18) + 'px';
      }

      if (currentHeight !== prevHeight) {
        
        //

      }

      prevWidth = currentWidth;
      prevHeight = currentHeight;
    });
  };
});

window.dispatchEvent(new Event('resize'));

function animate_people(start, end, duration, easing) {
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var percentage = Math.min(progress / duration, 1);
      var easedPercentage = easing(percentage);

      var value = start + (end - start) * easedPercentage;
      people.style.height = value + 'px';
      current_position_people = value; // Update current position

      if (percentage < 1) {
          animationId_people = requestAnimationFrame(step);
      }
    }

    animationId_power = requestAnimationFrame(step);
}

function easeInOutQuad(t) {
    t /= 0.5;
    if (t < 1) return 0.5 * t * t;
    t--;
    return -0.5 * (t * (t - 2) - 1);
}

document.addEventListener("DOMContentLoaded", function() {
    
  setTimeout(function() {

    cursor.style.display = "none"
    setTimeout(function() {

      cursor.style.display = "flex"
      setTimeout(function() {

        cursor.style.display = "none"
        setTimeout(function() {

          cursor.style.display = "flex"
          setTimeout(function() {

            cursor.style.left = "22.64151" + "%";
            var power_p = document.getElementsByClassName('power_p');
            for (var i = 0; i < power_p.length; i++) {
              power_p[i].style.backgroundColor = '#03FF4E';
            }
            setTimeout(function() {

              cursor.style.left = "33.96226" + "%";
              var power_o = document.getElementsByClassName('power_o');
              for (var i = 0; i < power_o.length; i++) {
                power_o[i].style.backgroundColor = '#03FF4E';
              }
              setTimeout(function() {

                cursor.style.left = "45.28302" + "%";
                var power_w = document.getElementsByClassName('power_w');
                for (var i = 0; i < power_w.length; i++) {
                  power_w[i].style.backgroundColor = '#03FF4E';
                }
                setTimeout(function() {

                  cursor.style.left = "56.60377" + "%";
                  var power_e = document.getElementsByClassName('power_e');
                  for (var i = 0; i < power_e.length; i++) {
                    power_e[i].style.backgroundColor = '#03FF4E';
                  }
                  setTimeout(function() {

                    cursor.style.left = "67.92453" + "%";
                    var power_r = document.getElementsByClassName('power_r');
                    for (var i = 0; i < power_r.length; i++) {
                      power_r[i].style.backgroundColor = '#03FF4E';
                    }
                    setTimeout(function() {

                      cursor.style.display = "none"
                      setTimeout(function() {

                        cursor.style.display = "flex"
                        setTimeout(function() {

                          cursor.style.left = "79.24528" + "%";
                          var of_o = document.getElementsByClassName('of_o');
                          for (var i = 0; i < of_o.length; i++) {
                            of_o[i].style.backgroundColor = '#ffffff';
                          }
                          setTimeout(function() {

                            cursor.style.left = "90.56604" + "%";
                            var of_f = document.getElementsByClassName('of_f');
                            for (var i = 0; i < of_f.length; i++) {
                              of_f[i].style.backgroundColor = '#ffffff';
                            }
                            setTimeout(function() {

                              cursor.style.display = "none"
                              var power_width = power.offsetWidth;
                              var new_height = (power_width / 53) * 5;

                              var start = 0;
                              animate_people(start, new_height, 500, easeInOutQuad); 
                              
                            }, 190);

                          }, 420);

                        }, 200);

                      }, 530);

                    }, 360);

                  }, 90);

                }, 170);

              }, 50);

            }, 170);

          }, 300);

        }, 530);

      }, 530);

    }, 530);

  }, 530);

  setTimeout(function() {

    initial_animation = true;

    var pixelContainers = document.querySelectorAll('#people .pixel_container');
    for (var i = 0; i < pixelContainers.length; i++) {
      pixelContainers[i].style.display = 'grid';
    }
    setTimeout(function() {

      const elements = document.querySelectorAll('.people_green');
      const shuffledElements = Array.from(elements);
      for (let i = shuffledElements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledElements[i], shuffledElements[j]] = [shuffledElements[j], shuffledElements[i]];
      }
      let delay = 8;
      shuffledElements.forEach((element) => {
        setTimeout(() => {
          element.style.background = '#03FF4E';
        }, delay);
        delay += 8;
      });

    }, 300);
        
  }, 5300);

  setTimeout(function() {

    const elements = document.querySelectorAll('.pixel');
    const shuffledElements = Array.from(elements);
    for (let i = shuffledElements.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledElements[i], shuffledElements[j]] = [shuffledElements[j], shuffledElements[i]];
    }
    let delay = 2;
    shuffledElements.forEach((element) => {
      setTimeout(() => {
        element.style.background = 'transparent';
      }, delay);
      delay += 2;
    });

    setTimeout(function() {

      window.location.href = 'selection.html';

    }, 1400);
        
  }, 7450);

});