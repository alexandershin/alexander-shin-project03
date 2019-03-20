
const games = [
  {
    title: 'Exploding Kittens',
    time: 'little',
    duration: '15 Min',
    category: 'party',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '5',
    value2: 'small',
    players: '2-5',
    image: 'assets/exploding-kittens.png'
  },
  {
    title: 'Splendor',
    time: 'little',
    duration: '30 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '4',
    value2: 'small',
    players: '2-4',
    image: 'assets/splendor.jpg'
  },
  {
    title: 'Catan',
    time: 'lot',
    duration: '60-120 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '3',
    maxPlayers: '4',
    value2: 'small',
    players: '3-4 Players',
    image: 'assets/catan.jpg'
  },
  {
    title: 'Ticket to Ride',
    time: 'lot',
    duration: '30-60 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '5',
    value2: 'small',
    players: '2-5 Players',
    image: 'assets/ticket.jpg'
  },
  {
    title: 'Love Letter Premium',
    time: 'little',
    duration: '20 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '8',
    value1: 'big',
    value2: 'small',
    players: '2-8 Players',
    image: 'assets/love-letter.jpg'
  },
  {
    title: 'Agricola',
    time: 'lot',
    duration: '30-150 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '1',
    maxPlayers: '5',
    value2: 'small',
    players: '1-5 Players',
    image: 'assets/agricola.jpg'
  },
  {
    title: 'DC Comics Deck-Building Game',
    time: 'lot',
    duration: '45 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '5',
    value2: 'small',
    players: '2-5 Players',
    image: 'assets/dc.png'
  },
  {
    title: 'Sheriff of Nottingham',
    time: 'lot',
    duration: '15 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '3',
    maxPlayers: '5',
    value2: 'small',
    players: '3-5 Players',
    image: 'assets/sheriff.jpg'
  },
  {
    title: 'Century: Golem Edition',
    time: 'lot',
    duration: '30-45 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '5',
    value2: 'small',
    players: '2-5 Players',
    image: 'assets/century.jpg'
  },
  {
    title: 'Tokaido',
    time: 'lot',
    duration: '45 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '5',
    value2: 'small',
    players: '2-5 Players',
    image: 'assets/tokaido.png'
  },
  {
    title: 'Pandemic',
    time: 'lot',
    duration: '45 Min',
    category: 'strategy',
    type: 'team',
    minPlayers: '2',
    maxPlayers: '4',
    value2: 'small',
    players: '2-4 Players',
    image: 'assets/pandemic.jpg'
  },
  {
    title: 'Forbidden Island',
    time: 'little',
    duration: '30 Min',
    category: 'strategy',
    type: 'team',
    minPlayers: '2',
    maxPlayers: '4',
    value2: 'small',
    players: '2-4 Players',
    image: 'assets/forbidden-island.jpg'
  },
  {
    title: 'Forbidden Desert',
    time: 'lot',
    duration: '45 Min',
    category: 'strategy',
    type: 'team',
    minPlayers: '2',
    maxPlayers: '5',
    value2: 'small',
    players: '2-5 Players',
    image: 'assets/forbidden-desert.jpg'
  },
  {
    title: 'Patchwork',
    time: 'little',
    duration: '15-30 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '2',
    value2: 'small',
    players: '2 Players',
    image: 'assets/patchwork.jpg'
  },
  {
    title: 'Dixit',
    time: 'little',
    duration: '30 Min',
    category: 'party',
    type: 'individual',
    minPlayers: '3',
    maxPlayers: '6',
    value1: 'big',
    value2: 'small',
    players: '3-6 Players',
    image: 'assets/dixit.jpg'
  },
  {
    title: 'Ghost Blitz',
    time: 'little',
    duration: '20 Min',
    category: 'party',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '8',
    value1: 'big',
    value2: 'small',
    players: '2-8 Players',
    image: 'assets/ghost-blitz.jpg'
  },
  {
    title: 'Bandu',
    time: 'lot',
    duration: '15-45 Min',
    category: 'party',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '8',
    value1: 'big',
    value2: 'small',
    players: '2-8 Players',
    image: 'assets/bandu.jpg'
  },
  {
    title: 'Coup',
    time: 'little',
    duration: '15 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '6',
    value1: 'big',
    value2: 'small',
    players: '2-6 Players',
    image: 'assets/coup.jpg'
  },
  {
    title: 'Dead of Winter',
    time: 'lot',
    duration: '60-120 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '5',
    value2: 'small',
    players: '2-5 Players',
    image: 'assets/dead-of-winter.jpg'
  },
  {
    title: 'Cosmic Encounter',
    time: 'lot',
    duration: '60-120 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '3',
    maxPlayers: '5',
    value2: 'small',
    players: '3-5 Players',
    image: 'assets/cosmic-encounter.jpg'
  },
  {
    title: 'Dominion',
    time: 'little',
    duration: '30 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '4',
    value2: 'small',
    players: '2-4 Players',
    image: 'assets/dominion.jpg'
  },
  {
    title: 'Codenames',
    time: 'little',
    duration: '15 Min',
    category: 'party',
    type: 'team',
    minPlayers: '2',
    maxPlayers: '8',
    value1: 'big',
    value2: 'small',
    players: '2-8 Players',
    image: 'assets/codenames.jpg'
  },
  {
    title: 'Telestrations',
    time: 'little',
    duration: '30 Min',
    category: 'party',
    type: 'individual',
    minPlayers: '4',
    maxPlayers: '8',
    value1: 'big',
    players: '4-8 Players',
    image: 'assets/telestrations.jpg'
  },
  {
    title: 'The Resistance: Avalon',
    time: 'little',
    duration: '30 Min',
    category: 'strategy',
    type: 'team',
    minPlayers: '5',
    maxPlayers: '10',
    value1: 'big',
    value2: 'small',
    players: '5-10 Players',
    image: 'assets/avalon.jpg'
  },
  {
    title: 'The Resistance',
    time: 'little',
    duration: '30 Min',
    category: 'strategy',
    type: 'team',
    minPlayers: '5',
    maxPlayers: '10',
    value1: 'big',
    value2: 'small',
    players: '5-10 Players',
    image: 'assets/resistance.jpg'
  },
  {
    title: 'Hanabi',
    time: 'little',
    duration: '25 Min',
    category: 'strategy',
    type: 'team',
    minPlayers: '2',
    maxPlayers: '5',
    value2: 'small',
    players: '2-5 Players',
    image: 'assets/hanabi.jpg'
  },
  {
    title: 'Pantone',
    time: 'little',
    duration: '15-30 Min',
    category: 'party',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '20',
    value1: 'big',
    value2: 'small',
    players: '2-20 Players',
    image: 'assets/pantone.jpg'
  },
  {
    title: '7 Wonders',
    time: 'little',
    duration: '30 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '7',
    value1: 'big',
    value2: 'small',
    players: '2-7 Players',
    image: 'assets/7-wonders.jpg'
  },
  {
    title: 'Sushi Go Party!',
    time: 'little',
    duration: '20 Min',
    category: 'party',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '8',
    value1: 'big',
    value2: 'small',
    players: '2-8 Players',
    image: 'assets/sushi.jpg'
  },
  {
    title: 'Time\'s Up! Title Recall!',
    time: 'lot',
    duration: '60 Min',
    category: 'party',
    type: 'team',
    minPlayers: '4',
    maxPlayers: '18',
    value1: 'big',
    players: '4-18 Players',
    image: 'assets/times-up.jpg'
  },
  {
    title: 'Captain Sonar',
    time: 'lot',
    duration: '45-60 Min',
    category: 'party',
    type: 'team',
    minPlayers: '2',
    maxPlayers: '8',
    value1: 'big',
    value2: 'small',
    players: '2-8 Players',
    image: 'assets/captain-sonar.png'
  },
  {
    title: 'Two Rooms and a Boom',
    time: 'little',
    duration: '15 Min',
    category: 'party',
    type: 'team',
    minPlayers: '6',
    maxPlayers: '30',
    value1: 'big',
    players: '6-30 Players',
    image: 'assets/two-rooms.png'
  },
  {
    title: 'Secret Hitler',
    time: 'lot',
    duration: '45 Min',
    category: 'strategy',
    type: 'team',
    minPlayers: '5',
    maxPlayers: '10',
    value1: 'big',
    value2: 'small',
    players: '5-10 Players',
    image: 'assets/secret-hitler.png'
  },
  {
    title: 'Spyfall',
    time: 'little',
    duration: '15 Min',
    category: 'party',
    type: 'individual',
    minPlayers: '3',
    maxPlayers: '8',
    value1: 'big',
    value2: 'small',
    players: '3-8 Players',
    image: 'assets/spyfall.jpg'
  },
  {
    title: 'One Night Ultimate Werewolf',
    time: 'little',
    duration: '10 Min',
    category: 'party',
    type: 'team',
    minPlayers: '3',
    maxPlayers: '10',
    value1: 'big',
    value2: 'small',
    players: '3-10 Players',
    image: 'assets/one-night-ultimate.jpg'
  },
  {
    title: 'Small World',
    time: 'lot',
    duration: '45-80 Min',
    category: 'strategy',
    type: 'individual',
    value2: 'small',
    players: '2-5 Players',
    image: 'assets/small-world.jpg'
  },
  {
    title: 'Deception: Murder in Hong Kong',
    time: 'little',
    duration: '20 Min',
    category: 'strategy',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '4-12 Players',
    image: 'assets/deception.jpg'
  },
  {
    title: 'Caverna: The Cave Farmers',
    time: 'lot',
    duration: '30-120 Min',
    category: 'strategy',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '1-7 Players',
    image: 'assets/caverna.jpg'
  },
  {
    title: 'Power Grid',
    time: 'lot',
    duration: '120 Min',
    category: 'strategy',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '2-6 Players',
    image: 'assets/power-grid.jpg'
  },
  {
    title: 'Arkham Horror',
    time: 'lot',
    duration: '120-360 Min',
    category: 'strategy',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '1-8 Players',
    image: 'assets/arkham-horror.jpg'
  },
  {
    title: 'Eldritch Horror',
    time: 'lot',
    duration: '120-240 Min',
    category: 'strategy',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '1-8 Players',
    image: 'assets/eldritch-horror.jpg'
  },
  {
    title: 'Bananagrams',
    time: 'little',
    duration: '15 Min',
    category: 'party',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '1-8 Players',
    image: 'assets/bananagrams.jpg'
  },
  {
    title: 'BANG!',
    time: 'little',
    duration: '20-40 Min',
    category: 'strategy',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '4-7 Players',
    image: 'assets/bang.jpg'
  },
  {
    title: 'Bohnanza',
    time: 'lot',
    duration: '45 Min',
    category: 'strategy',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '2-7 Players',
    image: 'assets/bohnanza.jpg'
  },
  {
    title: 'Junk Art',
    time: 'little',
    duration: '30 Min',
    category: 'strategy',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '2-6 Players',
    image: 'assets/junk-art.jpg'
  },
  {
    title: 'Cranium',
    time: 'lot',
    duration: '60 Min',
    category: 'party',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '4-16 Players',
    image: 'assets/cranium.jpg'
  },
  {
    title: 'Balderdash',
    time: 'lot',
    duration: '60 Min',
    category: 'party',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '2-6 Players',
    image: 'assets/balderdash.jpg'
  },
  {
    title: 'Mad Gab',
    time: 'lot',
    duration: '45 Min',
    category: 'party',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '2-12 Players',
    image: 'assets/madgab.jpg'
  },
  {
    title: 'Anomia: Party Edition',
    time: 'lot',
    duration: '30 Min',
    category: 'party',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '3-6 Players',
    image: 'assets/anomia.jpg'
  },
  {
    title: 'Lift it!',
    time: 'lot',
    duration: '30 Min',
    category: 'party',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '1-8 Players',
    image: 'assets/lift-it.jpg'
  },
  {
    title: 'Shadows over Camelot',
    time: 'lot',
    duration: '60-80 Min',
    category: 'strategy',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '3-7 Players',
    image: 'assets/shadows.jpg'
  },
];

// All images from https://boardgamegeek.com/ and https://www.boardgamebliss.com/products/bausack?variant=437880729

const myGames = []

$(function () {
  $('form').on('submit', (e) => {
    e.preventDefault();

    // Only allow submit if all questions are answered
    let all_answered = true;
    $('input:radio').each(function () {
      let name = $(this).attr('name');
      if ($(`input:radio[name='${name}']:checked`).length === 0) {
        all_answered = false;
      }
    });
    if (all_answered === false) {
      // alert('Not so fast! Please answer all questions to see your final game.');
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text:
          'Not so fast! Please answer all questions to see your final game.'
      });
    }
    // Only show results area if all questions are answered
    if (all_answered === true) {
      $('.results-section').removeClass('hide');
      // then animate to bottom for results
      $('html, body').animate({
        scrollTop: $("#section6").offset().top
      }, 300);
    }


  const userPlayers = $('input[name=players]:checked').val();
  const userTime = $('input[name=time]:checked').val();
  const userCategory = $('input[name=category]:checked').val();
  const userType = $('input[name=type]:checked').val();

  gamesPlayersArray = [];
  gamesTimeArray = [];
  gamesCategoryArray = [];
  gamesTypeArray = [];


  // TRYING TO GET BUTTONS TO MOVE TO NEXT QUESTION AUTO
    // $('input:radio[name="players"]').on('click keypress', function () {
    //   if (this.checked && this.value == 'small' || this.value === 'big') {
    //   }
    // })

  // TRYING TO GET BUTTONS TO MOVE TO NEXT QUESTION AUTO
  // $('.question-box').on('click keypress', function() {
  //   if ($('.question-box').length > 0) {
  //     document.limesurvey.move.value = 'movesubmit';
  //   }
  //   else {
  //     document.limesurvey.move.value = 'movenext';
  //   }
  //   document.limesurvey.submit();
  // })

  // HIDE AND SHOW NEXT QUESTION
  //   $('.question-1 label').on('click keypress', function (event) {
  //     if (event.which === 13 || event.type === 'click')
  //       $question1.addClass('hide');
  //     $question2.removeClass('hide');
  //     const userAnswer = $('input[name=biology]:checked').val();
  //     const pressedAnswer = $(this).val();

  //     if (userAnswer === 'correct' || pressedAnswer === 'correct') {
  //       answers.push(userAnswer);
  //       // answers.push(pressedAnswer);
  //     }
  //   })


// collect user inputs and filter through each array

  for (let i = 0; i < games.length; i++) {
    let currentGame = games[i];
    if (userPlayers === currentGame.value1 || userPlayers === currentGame.value2) {
    gamesPlayersArray.push(currentGame);
    console.log(currentGame);
    }
  }

  for (let i = 0; i < gamesPlayersArray.length; i++) {
    let currentGame = gamesPlayersArray[i];
    if (userTime === currentGame.time) {
    gamesTimeArray.push(currentGame);
    console.log(currentGame);
    }
  }

  for (let i = 0; i < gamesTimeArray.length; i++) {
    let currentGame = gamesTimeArray[i];
    if (userCategory === currentGame.category) {
      gamesCategoryArray.push(currentGame);
      console.log(currentGame);
    }
  }

  for (let i = 0; i < gamesCategoryArray.length; i++) {
    let currentGame = gamesCategoryArray[i];
    if (userType === currentGame.type) {
      gamesTypeArray.push(currentGame);
      console.log(currentGame);
    }
  }
    const randomGame = Math.floor(Math.random() * gamesTypeArray.length);
  

    
    // Smooth Scroll from https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2

   $('.results').html(
     `<p class="results-text animated fadeIn delay-0.95s">Tonight, we\'re playing...</p>\
     <h2 class = "results-title animated fadeIn delay-1s">${gamesTypeArray[randomGame].title}</h2>\
     <img src="${gamesTypeArray[randomGame].image}" alt="${gamesTypeArray[randomGame].title}" class="results-picture animated fadeIn delay-1s">\
     <p class="fun animated fadeIn delay-1s">Have fun and play responsibly</p>\
     <div class="restart animated fadeIn delay-1s">\
        <a href="">Choose another game!
          <i class="fas fa-chevron-right"></i>\
        </a>
      </div>`
     );


     
    });
    $('.restart').on('click', function() {
        location.reload();
      $('html,body').scrollTop(0);
    });
        
});


