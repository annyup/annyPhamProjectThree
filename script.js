// I purple you

// a landing page with "I purple you" as heading
// a sub-heading with "BTS's Best Hits"

// const welcome = alert(`Welcome to I purple you! An interactive timeline of BTS' best hits.`);

// flickity library loads images/timeline and interactive arrow buttons for user to scroll


// function of hover event on button
$(".albumButton > span").on("mouseenter mouseleave", function(hoverEvent){

  // removes class active on unhovered button
  $(".albumButton.active").removeClass("active");
  
  // adds class active on current hovered button
  $(this).parent().addClass("active");

});


// store each song's youtube url

const btsSongArray = [
  {
    title: 'No More Dream',
    img: 'assets/album1.jpg',
    url: 'assets/btsSongs/sound1.mp3'
  },
  {
    title: 'N.O',
    img: 'assets/album2.jpg',
    url: 'assets/btsSongs/sound2.mp3'
  },
  {
    title: 'Boy in Luv',
    img: 'assets/album3.jpg',
    url: 'assets/btsSongs/sound3.mp3'
  },
  {
    title: 'Danger',
    img: 'assets/album4.jpg',
    url: 'assets/btsSongs/sound4.mp3'
  },
  {
    title: 'War of Hormones',
    img: 'assets/album4.jpg',
    url: 'assets/btsSongs/sound5.mp3'
  },
  {
    title: 'I need U',
    img: 'assets/album5.jpg',
    url: 'assets/btsSongs/sound6.mp3'
  },
  {
    title: 'Dope',
    img: 'assets/album5.jpg',
    url: 'assets/btsSongs/sound7.mp3'
  },
  {
    title: 'Run',
    img: 'assets/album6.jpg',
    url: 'assets/btsSongs/sound8.mp3'
  },
  {
    title: 'Fire',
    img: 'assets/album7.jpg',
    url: 'assets/btsSongs/sound9.mp3'
  },
  {
    title: 'Save Me',
    img: 'assets/album7.jpg',
    url: 'assets/btsSongs/sound10.mp3'
  },
  {
    title: 'Blood Sweat & Tears',
    img: 'assets/album8.jpg',
    url: 'assets/btsSongs/sound11.mp3'
  },
  {
    title: 'Spring Day',
    img: 'assets/album9.jpg',
    url: 'assets/btsSongs/sound12.mp3'
  },
  {
    title: 'Not Today',
    img: 'assets/album9.jpg',
    url: 'assets/btsSongs/sound13.mp3'
  },
  {
    title: 'DNA',
    img: 'assets/album10.jpg',
    url: 'assets/btsSongs/sound14.mp3'
  },
  {
    title: 'Mic Drop',
    img: 'assets/album10.jpg',
    url: 'assets/btsSongs/sound15.mp3'
  },
  {
    title: 'Fake Love',
    img: 'assets/album11.jpg',
    url: 'assets/btsSongs/sound16.mp3'
  },
  {
    title: 'IDOL',
    img: 'assets/album12.jpg',
    url: 'assets/btsSongs/sound17.mp3'
  },
  {
    title: 'Waste it on me',
    img: 'assets/album13.jpg',
    url: 'assets/btsSongs/sound18.mp3'
  },
  {
    title: 'Boy with Luv',
    img: 'assets/album14.jpg',
    url: 'assets/btsSongs/sound19.mp3'
  },
  {
    title: 'Black Swan',
    img: 'assets/album15.jpg',
    url: 'assets/btsSongs/sound20.mp3'
  },
  {
    title: 'ON',
    img: 'assets/album16.jpg',
    url: 'assets/btsSongs/sound21.mp3'
  }
]

// get div class and add a song id to it
const songId = document.getElementsByClassName("albumButtonHover");
  // runs a loop to add an id
  for (let i = 0; i < songId.length; i++){
    songId[i].setAttribute("id", `song${i+1}`);
  }

// document ready function
$(function() {

  // grab a song from song inventory
  const playSong = (songInventory) => {

    // play the song from inventory
    let songCount = 1;

    songInventory.forEach(song => {
      const songContainer = $('<a>').attr ('onclick', `play('sound${songCount}')`);
      const songImage = $('<img>').attr('src', song.img);
      const songTitle = $('<span>').text(song.title);
      const songUrl = $('<audio>').attr('id', `sound${songCount}`).attr('src', song.url);


      songContainer.append(songImage, songTitle, songUrl);

      $(`#song${songCount++}`).append(songContainer);

    })
    
  }

  playSong(btsSongArray);

});

// play music function
// music will play depending on which button the user has clicked

const play = function playMusicById (soundId) {

  let audio = document.getElementById(soundId);
  
  // looks for all other tracks and stops them
  $('audio').each(function(){

    // handles all other audio
    // checks if audio is currently clicked audio
    // stops track if it's not the currently clicked
    if (this != audio) {
      this.pause();
      this.currentTime = 0;
    }

  });

  // handles the currently clicked audio
  // plays the currently clicked audio, or stops if it is already playing
  if (audio.paused) {
    audio.play();

    // sound timesout when it meets 30 seconds
    // resets current time to 0
    setTimeout(function () {
      audio.pause();
      audio.currentTime = 0;
    }, 30000);
  }
    else {
      audio.pause();
      audio.currentTime = 0;
    }
}



// If user were to click button more than once, it will ask user if it would like to listen to more
// If user clicks yes, links to site
// Else, exit


// A interactive button to play a randomize song
// This will trigger the carousel to scroll to the section of where the song is played(?)