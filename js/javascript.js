function openNav() {
  document.getElementById("mySidenav").style.width = "292.5px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function changeLetter(letterinput) {
  $("#title").html(letterinput.title);
  $("#lttr").html(letterinput.lttr)

}


$(document).ready(function () {

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  $(function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        $("#enterdiv").fadeIn();
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  });

  //setting up letter here

  class letter {
    constructor(title, lttr) {
      this.title = title;
      this.lttr = lttr;
    }
  }

  //setting up array

  let letters = []

  let lttr1 = new letter("Letter 1", "Inster letter txt here");
  let lttr2 = new letter("Letter 2", "Inster letter txt here");
  let lttr3 = new letter("Letter 3", "Inster letter txt here");
  let lttr4 = new letter("Letter 4", "Inster letter txt here");

  letters.push(lttr1);
  letters.push(lttr2);
  letters.push(lttr3);
  letters.push(lttr4);


  //initial screen
  changeLetter(letters[0]);

  //button setup

  let whichletter = 0;

  $("#lttrbutton").click(function () {
    whichletter = whichletter + 1;
    console.log("clicked");
    console.log(whichletter);

    if (whichletter >= letters.length) {
      whichletter = 0;

    }

    changeLetter(letters[whichletter])
  });



  //sticker page js
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
