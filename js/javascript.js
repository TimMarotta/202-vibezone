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

  let lttr1 = new letter("Letter 1", "May 22, 2048 Everything is weird. Yesterday was Friday, every Friday I go and hang out with my friends in the park and we ride our bikes and skate until our parents call us home for dinner. But yesterday, Mom and Dad wouldn&#39;t let me go. The weather wasn&#39;t even bad, which is normally why they would make me stay home so I don&#39;t catch a cold. They said that there was some virus going around that could make me really sick if I caught it. Dad said some idiot in Texas did something to a bear and he got really sick but didn’t know it so now everyone has to be careful. Mom and Dad had the news on during dinner tonight (we had steak). The lady on the news called it &#34;creofungi&#34; or something. She told the same story Dad did about the bear in Texas, apparently the guy died, which is nuts. Maybe he was trying to get a good video, nobody really knows, though. The lady also said that the virus spread to his family really quickly and now a whole bunch of them are sick. Scientists don&#39;t really know what causes it, they just know it came from a bear. The weirdest thing was that I looked over at Dad to ask him a question and he looked really scared, I’d never seen his eyes get that big. He looked at Mom and then they both left the room and told me to keep eating. They ran out kind of quickly so they forgot to turn off the TV. I didn&#39;t pay much attention though. When they came back, they told me they didn&#39;t want me to go to school next week. They said my teachers would understand and they could just send home the assignments for me. I didn&#39;t really care because I had a test this week I didn&#39;t want to take, so I guess that&#39;s cool. They also told me to download this app. My aunt told them about it and how it was supposed to be cool for kids so they can write and stuff because we&#39;ll have to spend more time inside. I don&#39;t really get it, but I figured I&#39;d give it a try to make them happy. I don&#39;t know if they know that I know they&#39;re freaked out, but I&#39;ll do this so they maybe calm down and let me out of the house again. This app has some pretty good games too, so I&#39;ll probably spend some time doing that.");
  let lttr2 = new letter("Letter 2", "Just staying home has been really hard. I really miss my friends, I know I see them on Zoom but it&#39;s just not the same. Like how am I supposed to be expected to pay attention in school while all this stuff is going on at home too. Dad doesn&#39;t want us to leave the house at all. We haven&#39;t been to a store in a while either, but we have gotten things delivered which is good. I just can&#39;t take it when mom and dad fight though. Like all my mom wanted to do was take a walk outside and I just suddenly heard screaming. I think it will be better soon though. Like my parents said that the swine flu was a big deal and I don&#39;t hear about that ever anymore, so it must&#39;ve been pretty quick. ");
  let lttr3 = new letter("Letter 3", "I feel like things can&#39;t get any worse. I am worried it&#39;s kinda my fault. Sometimes mom and I would sneak out for walks just to get out of the house. I wish she were here helping me deal with dad. He is just really stressing me out, I can not believe he is one of the people that actually believe the stuff just on the internet and not from the doctors. He won&#39;t let us do anything. I don&#39;t know if I am ever going to leave again. My Dad doesn&#39;t even want me to watch the news anymore, he says it&#39;s not for kids but I just really want to know what is going on. Every so often I can hear the death numbers from the news and when he is calling his friends. Each day just the same, the same games, the same food, the same house. I don&#39;t know why I am writing this still, my Dad says we are supposed to be conserving resources like electricity.");
  let lttr4 = new letter("Letter 4", "May 30, 2056 It&#39;s weird how so much has changed, but ultimately everything stays the same. I haven&#39;t opened this app in what, 8 years? Dad died a few years ago, they took him away just like they did to Mom. Wrapped him up in that god awful orange bag and moved him right out the door. Never to be seen again. Since then, I haven&#39;t left the house because I&#39;m still too scared. I finished high school, but I didn&#39;t even bother with college. What&#39;s the point if I can&#39;t even leave my house? The banks stopped doing evictions since no one is outside to do the actual eviction. So I&#39;m just living here. I go outside once a year on Mom&#39;s birthday. I do&#39;’t let any skin show or breathe without a mask. I take a walk around the block, but that&#39;s about it. It reminds me of her and I almost always cry. I want to stop at the park and sit there, but I know I&#39;d just get sick. So I keep moving, one step after another until I reach my house again. The craziest thing is that no one has gotten sick in two years. The news stopped reporting about the virus because no one goes outside. Everyone stays in their homes and works, they’re too scared to die. The only time people really leave their house is in that damn orange bag. Drones have taken over all delivery, manufacturing, all of it. They even have drones that monitor other drones. So we just stay inside and wait. Wait for the inevitable nothing.");

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

  //add friend button

  $("#addfriend").click(function () {
    console.log("clicked");
    $("#nofriends").css("display", "block");
  })

  $(".unfollow").click(function() {
    alert("You cannot unfollow a friend at this time.");
  });

  $(".friends .tryit").click(function() {
    alert("You cannot message a friend at this time.");
  });
});