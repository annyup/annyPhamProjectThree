// Stores each song title, image, alt text and url in an array

const btsSongArray = [
  {
    title: 'No More Dream',
    img: 'assets/song1.jpg',
    url: 'assets/btsSongs/sound1.mp3',
    alt: '2 Cool 4 Skool Concept Photo'
  },
  {
    title: 'N.O.',
    img: 'assets/song2.jpg',
    url: 'assets/btsSongs/sound2.mp3',
    alt: 'O!RUL8,2? Concept Photo'
  },
  {
    title: 'Boy in Luv',
    img: 'assets/song3.jpg',
    url: 'assets/btsSongs/sound3.mp3',
    alt: 'Skool Luv Affair Concept Photo'
  },
  {
    title: 'Danger',
    img: 'assets/song4.jpg',
    url: 'assets/btsSongs/sound4.mp3',
    alt: 'Dark & Wild Concept Photo'
  },
  {
    title: 'War of Hormones',
    img: 'assets/song5.jpg',
    url: 'assets/btsSongs/sound5.mp3',
    alt: 'Dark & Wild Concept Photo'
  },
  {
    title: 'I need U',
    img: 'assets/song6.jpg',
    url: 'assets/btsSongs/sound6.mp3',
    alt: 'The Most Beautiful Moment in Life Part 1 Concept Photo'
  },
  {
    title: 'Dope',
    img: 'assets/song7.jpg',
    url: 'assets/btsSongs/sound7.mp3',
    alt: 'The Most Beautiful Moment in Life Part 1 Concept Photo'
  },
  {
    title: 'Run',
    img: 'assets/song8.jpg',
    url: 'assets/btsSongs/sound8.mp3',
    alt: 'The Most Beautiful Moment in Life Part 2 Concept Photo'
  },
  {
    title: 'Fire',
    img: 'assets/song9.jpg',
    url: 'assets/btsSongs/sound9.mp3',
    alt: 'Young Forever Concept Photo'
  },
  {
    title: 'Save Me',
    img: 'assets/song10.jpg',
    url: 'assets/btsSongs/sound10.mp3',
    alt: 'Young Forever Concept Photo'
  },
  {
    title: 'Blood Sweat & Tears',
    img: 'assets/song11.jpg',
    url: 'assets/btsSongs/sound11.mp3',
    alt: 'Wings Concept Photo'
  },
  {
    title: 'Spring Day',
    img: 'assets/song12.jpg',
    url: 'assets/btsSongs/sound12.mp3',
    alt: 'You Never Walk Alone Concept Photo'
  },
  {
    title: 'Not Today',
    img: 'assets/song13.jpg',
    url: 'assets/btsSongs/sound13.mp3',
    alt: 'You Never Walk Alone Concept Photo'
  },
  {
    title: 'DNA',
    img: 'assets/song14.jpg',
    url: 'assets/btsSongs/sound14.mp3',
    alt: 'Love Yourself: Her Concept Photo'
  },
  {
    title: 'Mic Drop',
    img: 'assets/song15.jpg',
    url: 'assets/btsSongs/sound15.mp3',
    alt: 'Love Yourself: Her Concept Photo'
  },
  {
    title: 'Fake Love',
    img: 'assets/song16.jpg',
    url: 'assets/btsSongs/sound16.mp3',
    alt: 'Love Yourself: Tear Concept Photo'
  },
  {
    title: 'IDOL',
    img: 'assets/song17.jpg',
    url: 'assets/btsSongs/sound17.mp3',
    alt: 'Love Yourself: Answer Concept Photo'
  },
  {
    title: 'Waste it on me',
    img: 'assets/song18.jpg',
    url: 'assets/btsSongs/sound18.mp3',
    alt: 'BTS featuring Steve Aoki'
  },
  {
    title: 'Boy with Luv',
    img: 'assets/song19.jpg',
    url: 'assets/btsSongs/sound19.mp3',
    alt: 'Map of the Soul: Persona Concept Photo'
  },
  {
    title: 'Black Swan',
    img: 'assets/song20.jpg',
    url: 'assets/btsSongs/sound20.mp3',
    alt: 'Map of the Soul: 7 Concept Photo'
  },
  {
    title: 'ON',
    img: 'assets/song21.jpg',
    url: 'assets/btsSongs/sound21.mp3',
    alt: 'Map of the Soul: 7 Concept Photo'
  }
]

// Gets a div class and adds a id of "song#" to it
const songId = document.getElementsByClassName("albumButtonHover");
  // Runs a loop to add an id
  for (let i = 0; i < songId.length; i++){
    songId[i].setAttribute("id", `song${i+1}`);
  }

// Document ready function
$(function() {

  // Grabs a song from song inventory of the array
  const playSong = (songInventory) => {

    // Runs a forEach and adds syntax to the div
    let songCount = 1;

    songInventory.forEach(song => {
      const songContainer = $('<a>').attr ('onclick', `play('sound${songCount}')`);
      const songImage = $('<img>').attr('src', song.img).attr('alt', song.alt);
      const songTitle = $('<span>').text(song.title);
      const songUrl = $('<audio>').attr('id', `sound${songCount}`).attr('src', song.url);


      songContainer.append(songImage, songTitle, songUrl);

      $(`#song${songCount++}`).append(songContainer);
    })
  }

  playSong(btsSongArray);

  //  Runs a function when mouse enters on the button
  $(".albumButton > span").on("mouseenter", function(hoverEvent){

    // Removes class of active on unhovered button
    $(".albumButton.active").removeClass("active");

    // Adds a class of active on current hovered button
    $(this).parent().addClass("active");
  });
});

// Play music function
// Music will play depending on which button the user has clicked
const play = function playMusicById (soundId) {

  let audio = document.getElementById(soundId);
  
  // Looks for all other tracks and stops them
  $('audio').each(function(){

    // Set volume to 40%
    audio.volume = 0.4;

    // Handles all other audio
    // Checks if audio is currently clicked audio
    // Stops track if it's not the currently clicked
    if (this != audio) {
      this.pause();
      this.currentTime = 0;
    }

  });

  // Handles the currently clicked audio
  // Plays the currently clicked audio, or stops if it is already playing
  if (audio.paused) {
    audio.play();

    // Sound timesout when it meets 30 seconds
    // Resets current time to 0
    setTimeout(function () {
      audio.pause();
      audio.currentTime = 0;

      // If user presses the randomize button and time runs out, change text 'stop' to 'randomize'
      $('#randomize span').text('randomize');
    }, 30000);
  }
    else {
      audio.pause();
      audio.currentTime = 0;

      // Resets randomize button when music is paused via clicking the circles instead of stop button
      $('#randomize span').text('randomize');
      $('#randomize').val ('stopped');
    }
}

// If user clicks on button, randomize the array to play a song
const randomPlay = function () {

  $('#randomize').on('click', function () {

    // Checks if stopped or playing
    if ($('#randomize').val() === 'stopped'){

      // Randomly pick a song from the array
      let randomSound = Math.ceil(Math.random()*btsSongArray.length);      
      
      // Call the function to play a random song
      play(`sound${randomSound}`);

      // Changes innerHTML to stop
      $('#randomize span').text('stop');
      $('#randomize').val ('playing');
    }

    else if ($('#randomize').val() === 'playing') {

      // Stops all songs
      $('audio').each(function(){
        this.pause();
        this.currentTime = 0;
      });

      // Sets button to randomize again
      $('#randomize span').text('randomize');
      $('#randomize').val ('stopped');
    }
  });
}

// Calls the function when button is clicked
randomPlay();