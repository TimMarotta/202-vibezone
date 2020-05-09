function openNav() {
  document.getElementById("mySidenav").style.width = "292.5px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


$(document).ready(function () {
  $("#henry").click(function () {
    console.log("clicked");
    $("#overlayimg").attr("src", "../img/stickers/henry.png");
    $("#overlay").fadeIn();
  });

  $("#icarly").click(function () {
    console.log("clicked");
    $("#overlayimg").attr("src", "../img/stickers/icarly.png");
    $("#overlay").fadeIn();
  });

  $("#john1").click(function () {
    console.log("clicked");
    $("#overlayimg").attr("src", "../img/stickers/john_cena.png");
    $("#overlay").fadeIn();
  });

  $("#john2").click(function () {
    console.log("clicked");
    $("#overlayimg").attr("src", "../img/stickers/john_cena.png");
    $("#overlay").fadeIn();
  });

  $("#jojo1").click(function () {
    console.log("clicked");
    $("#overlayimg").attr("src", "../img/stickers/jojo.png");
    $("#overlay").fadeIn();
  });

  $("#jojo2").click(function () {
    console.log("clicked");
    $("#overlayimg").attr("src", "../img/stickers/jojo.png");
    $("#overlay").fadeIn();
  });

  $("#lincoln").click(function () {
    console.log("clicked");
    $("#overlayimg").attr("src", "../img/stickers/lincoln.png");
    $("#overlay").fadeIn();
  });

  $("#spongebob").click(function () {
    console.log("clicked");
    $("#overlayimg").attr("src", "../img/stickers/spongebob.png");
    $("#overlay").fadeIn();
  });

  $("#tori").click(function () {
    console.log("clicked");
    $("#overlayimg").attr("src", "../img/stickers/tori.png");
    $("#overlay").fadeIn();
  });

  $("#overlay").click(function () {
    $("#overlay").fadeOut();
  })
});