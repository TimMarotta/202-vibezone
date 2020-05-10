function openNav() {
    document.getElementById("mySidenav").style.width = "292.5px";
  }
  
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
        // HERE IS WHAT SHOULD TRIGGER FADEIN; the visibility is my current attempt
        
        // document.getElementById("enterbutton").style.visibility = "visible";
        // $("#enterdiv").fadeIn(3000);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  });