// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

$(function () {
  $(".ui.checkbox").checkbox();
  console.log("js loaded");

  $("#rsvp-form").on("submit", function (e) {
    $("#player").show();
    $("#player")[0].play();
    var confettiGun = setInterval(function () {
      confetti({
        angle: getRandomInt(45, 135),
        particleCount: 150,
        startVelocity: 60,
        spread: 110,
        gravity: 0.5,
        origin: { y: 0.9 },
      });
    }, 857);

    setTimeout(function () {
      clearInterval(confettiGun);
    }, 20000);

    $("#rsvp-form").hide();
    $("#submit-message").show();
  });

  $("#music-form").on("submit", function (e) {
    $("#music-submit-message").show();
  });

  $("a[href^=\\#]").on('click', function (e) {
    e.preventDefault();
    var dest = $(this).attr("href");
    var menuHeight = $('#menu').height();
    $("html,body").animate({ scrollTop: $(dest).offset().top - menuHeight }, "slow");
  });
});
