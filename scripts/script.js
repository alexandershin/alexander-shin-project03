
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
    players: '2-5'
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
    players: '2-4'
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
    players: '3-4 Players'
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
    players: '2-5 Players'
  },
  {
    title: 'Love Letter',
    time: 'little',
    duration: '20 Min',
    category: 'strategy',
    type: 'individual',
    minPlayers: '2',
    maxPlayers: '4',
    value2: 'small',
    players: '2-4 Players'
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
    players: '1-5 Players'
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
    players: '2-5 Players'
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
    players: '3-5 Players'
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
    players: '2-5 Players'
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
    players: '2-5 Players'
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
    players: '2-4 Players'
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
    players: '2-4 Players'
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
    players: '2-5 Players'
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
    players: '2 Players'
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
    players: '3-6 Players'
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
    players: '2-8 Players'
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
    players: '2-8 Players'
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
    players: '2-6 Players'
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
    players: '2-5 Players'
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
    players: '3-5 Players'
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
    players: '2-4 Players'
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
    players: '2-8 Players'
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
    players: '4-8 Players'
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
    players: '5-10 Players'
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
    players: '5-10 Players'
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
    players: '2-5 Players'
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
    players: '2-20 Players'
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
    players: '2-7 Players'
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
    players: '2-8 Players'
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
    players: '4-18 Players'
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
    players: '2-8 Players'
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
    players: '6-30 Players'
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
    players: '5-10 Players'
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
    players: '3-8 Players'
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
    players: '3-10 Players'
  },
  {
    title: 'Small World',
    time: 'lot',
    duration: '45-80 Min',
    category: 'strategy',
    type: 'individual',
    value2: 'small',
    players: '2-5 Players'
  },
  {
    title: 'Deception: Murder in Hong Kong',
    time: 'little',
    duration: '20 Min',
    category: 'strategy',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '4-12 Players'
  },
  {
    title: 'Caverna: The Cave Farmers',
    time: 'lot',
    duration: '30-120 Min',
    category: 'strategy',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '1-7 Players'
  },
  {
    title: 'Power Grid',
    time: 'lot',
    duration: '120 Min',
    category: 'strategy',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '2-6 Players'
  },
  {
    title: 'Arkham Horror',
    time: 'lot',
    duration: '120-360 Min',
    category: 'strategy',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '1-8 Players'
  },
  {
    title: 'Eldritch Horror',
    time: 'lot',
    duration: '120-240 Min',
    category: 'strategy',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '1-8 Players'
  },
  {
    title: 'Bananagrams',
    time: 'little',
    duration: '15 Min',
    category: 'party',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '1-8 Players'
  },
  {
    title: 'BANG!',
    time: 'little',
    duration: '20-40 Min',
    category: 'strategy',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '4-7 Players'
  },
  {
    title: 'Bohnanza',
    time: 'lot',
    duration: '45 Min',
    category: 'strategy',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '2-7 Players'
  },
  {
    title: 'Junk Art',
    time: 'little',
    duration: '30 Min',
    category: 'strategy',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '2-6 Players'
  },
  {
    title: 'Cranium',
    time: 'lot',
    duration: '60 Min',
    category: 'party',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '4-16 Players'
  },
  {
    title: 'Balderdash',
    time: 'lot',
    duration: '60 Min',
    category: 'party',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '2-6 Players'
  },
  {
    title: 'Mad Gab',
    time: 'lot',
    duration: '45 Min',
    category: 'party',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '2-12 Players'
  },
  {
    title: 'Anomia: Party Edition',
    time: 'lot',
    duration: '30 Min',
    category: 'party',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '3-6 Players'
  },
  {
    title: 'Lift it!',
    time: 'lot',
    duration: '30 Min',
    category: 'party',
    type: 'individual',
    value1: 'big',
    value2: 'small',
    players: '1-8 Players'
  },
  {
    title: 'Shadows over Camelot',
    time: 'lot',
    duration: '60-80 Min',
    category: 'strategy',
    type: 'team',
    value1: 'big',
    value2: 'small',
    players: '3-7 Players'
  },
];

const myGames = []


myGames.handleSubmit = () => {
  $('form').on('submit', (e) => {
    e.preventDefault();
  });
}

myGames.init = () => {
  myGames.handleSubmit();
}


$(function () {
  myGames.init();

  const userPlayers = $('input[name=players]:checked').val();
  console.log(userPlayers);
  const userTime = $('input[name=time]:checked').val();
  console.log(userTime);
  const userCategory = $('input[name=category]:checked').val();
  console.log(userCategory);
  const userType = $('input[name=type]:checked').val();
  console.log(userType);


  const userGames = {
    userGamesPlayers: userPlayers,
    userGamesTime: userTime,
    userGamesCategory: userCategory,
    userGamesType: userType
  };

  gamesPlayersArray = [];
  gamesTimeArray = [];
  gamesCategoryArray = [];
  gamesTypeArray = [];


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

  // const randomGameArray = (array) => {
  //   const randomGame = Math.floor(Math.random() * array.length);
  //   return array[randomGame];
  // }

    const randomGame = Math.floor(Math.random() * gamesTypeArray.length);
    // return array[randomGame];
  

  // let finalGame = randomGameArray(gamesTypeArray);

   $('.results').html(`<h2 class = "choice">${gamesTypeArray[randomGame].title}</h2>`);
   
});


  

 
// -need to have user player choice value match value of games min player value
// - new array of min player categories
// - from new array narrow down by user time choice, category and type


