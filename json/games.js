function formatGameData(gameArray) {
  const formattedData = {};

  gameArray.forEach(game => {
    const gamesource = game["gamesource"].replace(/\/index\.html$/, ''); // Remove /index.html from gamesource
    formattedData[gamesource] = {
      "game-title": game["game-title"],
      "gamesource": gamesource,
      "game-cover": game["game-cover"]
    };
  });

  return formattedData;
}

// Example data
const gameDataArray = [
   {
      "game-title":"Mindustry/index.html",
      "game-cover":"cover.svg",
      "gamesource":"mind"
   },
   {
      "game-title":"House of Hazards/index.html",
      "game-cover":"favicon.ico",
      "gamesource":"houseofhazards"
   },
   {
      "game-title":"Shape Shipper/index.html",
      "game-cover":"cover.svg",
      "gamesource":"shape"
   },
   {
      "game-title":"Rough Dino/index.html",
      "game-cover":"cover.svg",
      "gamesource":"roughdino"
   },
   {
      "game-title":"Geometry Meltdown/index.html",
      "game-cover":"cover.svg",
      "gamesource":"geomelt"
   },
   {
      "game-title":"Geometry Jump/index.html",
      "game-cover":"cover.svg",
      "gamesource":"geojump"
   },
   {
      "game-title":"Counter Strike: DS/index.html",
      "game-cover":"cover.svg",
      "gamesource":"cds"
   },
   {
      "game-title":"Terri-Fried/index.html",
      "game-cover":"cover.svg",
      "gamesource":"terrifried"
   },
   {
      "game-title":"Geometry Dash Remastered/index.html",
      "game-cover":"cover.svg",
      "gamesource":"geodashrm"
   },
   {
      "game-title":"The Minions: Resurrection/index.html",
      "game-cover":"cover.svg",
      "gamesource":"minion"
   },
   {
      "game-title":"Geometry Dash Sky/index.html",
      "game-cover":"cover.svg",
      "gamesource":"geodashsky"
   },
   {
      "game-title":"Drift Mania/index.html",
      "game-cover":"cover.svg",
      "gamesource":"drift"
   },
   {
      "game-title":"Driving Force 4/index.html",
      "game-cover":"cover.svg",
      "gamesource":"driving"
   },
   {
      "game-title":"Minecraft Games/index.html",
      "game-cover":"cover.svg",
      "gamesource":"eaglercraft"
   },
   {
      "game-title":"Red Ball 1/index.html",
      "game-cover":"cover.svg",
      "gamesource":"redball"
   },
   {
      "game-title":"Recoil/index.html",
      "game-cover":"cover.svg",
      "gamesource":"recoil"
   },
   {
      "game-title":"Karlson't/index.html",
      "game-cover":"cover.svg",
      "gamesource":"karlsont"
   },
   {
      "game-title":"Deepest Sword/index.html",
      "game-cover":"logo.png",
      "gamesource":"deepestsword"
   },
   {
      "game-title":"Tomb of The Mask/index.html",
      "game-cover":"cover.svg",
      "gamesource":"tombofthemask"
   },
   {
      "game-title":"Hill Climb Racing/index.html",
      "game-cover":"cover.svg",
      "gamesource":"hillclimbracing"
   },
   {
      "game-title":"Gladihoppers/index.html",
      "game-cover":"cover.svg",
      "gamesource":"gladihoppers"
   },
   {
      "game-title":"Flappy Copter/index.html",
      "game-cover":"cover.svg",
      "gamesource":"flappycopter"
   },
   {
      "game-title":"Kick That Buddy/index.html",
      "game-cover":"cover.svg",
      "gamesource":"kickthatbuddy"
   },
   {
      "game-title":"Grand Truckismo/index.html",
      "game-cover":"cover.svg",
      "gamesource":"grandtruckismo"
   },
   {
      "game-title":"Turbo Racing 3/index.html",
      "game-cover":"cover.svg",
      "gamesource":"turboracing3"
   },
   {
      "game-title":"The Binding of Issac/index.html",
      "game-cover":"cover.svg",
      "gamesource":"tboi"
   },
   {
      "game-title":"Gun Knight/index.html",
      "game-cover":"cover.svg",
      "gamesource":"gunknight"
   },
   {
      "game-title":"The Oregon Trail/index.html",
      "game-cover":"cover.svg",
      "gamesource":"oregon"
   },
   {
      "game-title":"Windows 98/index.html",
      "game-cover":"cover.svg",
      "gamesource":"windows98"
   },
   {
      "game-title":"Creeper Craft/index.html",
      "game-cover":"cover.svg",
      "gamesource":"creepercraft"
   },
   {
      "game-title":"Block Zappers 3/index.html",
      "game-cover":"logo.png",
      "gamesource":"blockzappers"
   },
   {
      "game-title":"Kerosene Client/index.html",
      "game-cover":"cover.svg",
      "gamesource":"keroseneclient"
   },
   {
      "game-title":"Frogger/index.html",
      "game-cover":"cover.svg",
      "gamesource":"frogger"
   },
   {
      "game-title":"Simon/index.html",
      "game-cover":"cover.svg",
      "gamesource":"simon"
   },
   {
      "game-title":"Splash Dash Racing/index.html",
      "game-cover":"cover.svg",
      "gamesource":"splashanddash"
   },
   {
      "game-title":"Super Mario 63/index.html",
      "game-cover":"cover.svg",
      "gamesource":"mario63"
   },
   {
      "game-title":"Bike Champ 2/index.html",
      "game-cover":"logo.jpg",
      "gamesource":"bikechamp2"
   },
   {
      "game-title":"Grand Theft Grotto/index.html",
      "game-cover":"cover.svg",
      "gamesource":"gtg"
   },
   {
      "game-title":"Bike Champ/index.html",
      "game-cover":"logo.png",
      "gamesource":"bikechamp"
   },
   {
      "game-title":"Gloom/index.html",
      "game-cover":"cover.svg",
      "gamesource":"gloom"
   },
   {
      "game-title":"Copter/index.html",
      "game-cover":"cover.svg",
      "gamesource":"copter"
   },
   {
      "game-title":"Minesweeper/index.html",
      "game-cover":"cover.svg",
      "gamesource":"minesweeper"
   },
   {
      "game-title":"POOM/index.html",
      "game-cover":"cover.svg",
      "gamesource":"poom"
   },
   {
      "game-title":"Solitaire/index.html",
      "game-cover":"cover.svg",
      "gamesource":"solitaire"
   },
   {
      "game-title":"Spank the Monkey/index.html",
      "game-cover":"cover.svg",
      "gamesource":"spankthemonkey"
   },
   {
      "game-title":"CMM Client/index.html",
      "game-cover":"cmm.jpeg",
      "gamesource":"cmm-client"
   },
   {
      "game-title":"Pool/index.html",
      "game-cover":"cover.svg",
      "gamesource":"pool"
   },
   {
      "game-title":"Yohoho.io/index.html",
      "game-cover":"cover.svg",
      "gamesource":"yohoho"
   },
   {
      "game-title":"Tube Jumpers/index.html",
      "game-cover":"cover.svg",
      "gamesource":"tube-jumpers"
   },
   {
      "game-title":"Hill Climb Racing 2/index.html",
      "game-cover":"cover.svg",
      "gamesource":"hillclimbracing2"
   },
   {
      "game-title":"DOOM/index.html",
      "game-cover":"logo.png",
      "gamesource":"doom"
   },
   {
      "game-title":"Awesome Tanks/index.html",
      "game-cover":"cover.svg",
      "gamesource":"awesometanks"
   },
   {
      "game-title":"Pong",
      "gamesource":"pong/index.html",
      "game-cover":"cover.svg"
   },
   {
      "game-title":"A Dance of Fire & Ice",
      "gamesource":"adofai/index.html",
      "game-cover":"splash.png"
   },
   {
      "game-title":"Friday Night Funkin",
      "gamesource":"fridaynightfunkin/index.html",
      "game-cover":"fnf-icon.jpg"
   },
   {
      "game-title":"Worlds Hardest Game",
      "gamesource":"worldshardestgame/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"GBA Emulator",
      "gamesource":"gba/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Celeste",
      "gamesource":"celeste/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Mario",
      "gamesource":"mario/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"60s Burger Run",
      "gamesource":"60sburgerrun/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Cluster Rush",
      "gamesource":"cluster-rush/index.html",
      "game-cover":"icon.jpg"
   },
   {
      "game-title":"Vex 3",
      "gamesource":"vex3/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Adventure Capitalist",
      "gamesource":"adventure-capitalist/index.html",
      "game-cover":"logo.webp"
   },
   {
      "game-title":"Bloons Tower Defense 3",
      "gamesource":"btd3/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Avalanche",
      "gamesource":"avalanche/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Slope",
      "gamesource":"slope/index.html",
      "game-cover":"slope4.jpeg"
   },
   {
      "game-title":"Cell Machine",
      "gamesource":"cell-machine/index.html",
      "game-cover":"img/icon.png"
   },
   {
      "game-title":"Run 2",
      "gamesource":"run2/index.html",
      "game-cover":"icon.jpg"
   },
   {
      "game-title":"Vex 5",
      "gamesource":"vex5/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Vex 4",
      "gamesource":"vex4/index.html",
      "game-cover":"vex4.png"
   },
   {
      "game-title":"Vex 2",
      "gamesource":"vex2/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Crossy Road",
      "gamesource":"crossyroad/index.html",
      "game-cover":"chicken.png"
   },
   {
      "game-title":"Wall Smash",
      "gamesource":"wallsmash/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Death Run 3D",
      "gamesource":"death-run-3d/index.html",
      "game-cover":"img/death.png"
   },
   {
      "game-title":"Gun Mayhem 2",
      "gamesource":"gunmayhem2/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"CircloO",
      "gamesource":"circloo/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Vex",
      "gamesource":"vex/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Stack",
      "gamesource":"stack/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"xx142-b2.exe",
      "gamesource":"xx142-b2.exe/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"paper.io",
      "gamesource":"paperio/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Chibi Knight",
      "gamesource":"chibiknight/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"1v1.lol",
      "gamesource":"1v1lol/index.html",
      "game-cover":"splash.png"
   },
   {
      "game-title":"Dino",
      "gamesource":"dino/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Tetris",
      "gamesource":"tetris/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Geometry Dash (Scratch)",
      "gamesource":"geometrydash/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Sand Game",
      "gamesource":"sand/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Dante",
      "gamesource":"dante/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Wordle",
      "gamesource":"wordle/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Offline Paradise",
      "gamesource":"offlineparadise/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"2048",
      "gamesource":"2048/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Doodle Jump",
      "gamesource":"doodlejump/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Weave Silk",
      "gamesource":"weavesilk/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Super Meat Boy",
      "gamesource":"supermeatboy/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Vex 6",
      "gamesource":"vex6/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"WebGL Fluid Sim",
      "gamesource":"fluidsim/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Basketball Stars",
      "gamesource":"basketball-stars/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"osu!",
      "gamesource":"osu/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Cookie Clicker",
      "gamesource":"cookieclicker/index.html",
      "game-cover":"img/perfectCookie.png"
   },
   {
      "game-title":"Superhot",
      "gamesource":"superhot/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Super Mario 64",
      "gamesource":"supermario64/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Gun Mayhem Redux",
      "gamesource":"gunmayhemredux/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"I Wanna Be Thy Copy",
      "gamesource":"iwbtc/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"HexGL",
      "gamesource":"hexgl/index.html",
      "game-cover":"icon_128.png"
   },
   {
      "game-title":"Champion Island",
      "gamesource":"championisland/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Learn to Fly",
      "gamesource":"learntofly/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Wordle Bot",
      "gamesource":"wordlebot/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Cut The Rope",
      "gamesource":"cuttherope/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Chess",
      "gamesource":"chess/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Flappy Bird",
      "gamesource":"flappybird/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Lows Adventures 2",
      "gamesource":"lowsadventures2/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Drift Boss",
      "gamesource":"drift-boss/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Fireboy & Watergirl 1",
      "gamesource":"fireboywatergirl/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Gun Mayhem",
      "gamesource":"gunmayhem/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Duck Life 4",
      "gamesource":"ducklife4/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Achievement Unlocked",
      "gamesource":"achieveunlocked/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Achievement Unlocked 2",
      "gamesource":"achieveunlocked2/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"This Is The Only Level",
      "gamesource":"thisistheonlylevel/index.html",
      "game-cover":"logo.png"
   },
   {
      "game-title":"This Is The Only Level 2",
      "gamesource":"thisistheonlylevel2/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Bitlife",
      "gamesource":"bitlife/index.html",
      "game-cover":"bitlife.png"
   },
   {
      "game-title":"Duck Life 1",
      "gamesource":"ducklife1/index.html",
      "game-cover":"ducklife1.png"
   },
   {
      "game-title":"Duck Life 2",
      "gamesource":"ducklife2/index.html",
      "game-cover":"ducklife2.png"
   },
   {
      "game-title":"Duck Life 3",
      "gamesource":"ducklife3/index.html",
      "game-cover":"ducklife3.png"
   },
   {
      "game-title":"ovo",
      "gamesource":"ovo/index.html",
      "game-cover":"ovo3.png"
   },
   {
      "game-title":"There Is No Game",
      "gamesource":"thereisnogame/index.html",
      "game-cover":"icon-256.png"
   },
   {
      "game-title":"Universal Paperclips",
      "gamesource":"universal-paperclips/index.html",
      "game-cover":"universal-paperclips.png"
   },
   {
      "game-title":"Windows 11",
      "gamesource":"win11/index.html",
      "game-cover":"favicon.png"
   },
   {
      "game-title":"Learn to Fly 2",
      "gamesource":"learntofly2/index.html",
      "game-cover":"logo.jpg"
   },
   {
      "game-title":"Worlds Hardest Game 2",
      "gamesource":"worldhardestgame2/index.html",
      "game-cover":"the-worlds-hardest-game-2.jpg"
   },
   {
      "game-title":"Vex 7",
      "gamesource":"vex7/index.html",
      "game-cover":"icon.jpeg"
   },
   {
      "game-title":"Slope Ball",
      "gamesource":"slope-ball/index.html",
      "game-cover":"icon.jpg"
   },
   {
      "game-title":"Slope 2",
      "gamesource":"slope2/index.html",
      "game-cover":"slope-2-logo.png"
   },
   {
      "game-title":"Learn to Fly Idle",
      "gamesource":"learntoflyidle/index.html",
      "game-cover":"icon.jpg"
   },
   {
      "game-title":"Red Ball 4",
      "gamesource":"redball4/index.html",
      "game-cover":"redball4.webp"
   },
   {
      "game-title":"Red Ball 4 Vol 3",
      "gamesource":"redball4vol3/index.html",
      "game-cover":"redball4vol3.webp"
   },
   {
      "game-title":"Red Ball 4 Vol 2",
      "gamesource":"redball4vol2/index.html",
      "game-cover":"redball4vol2.webp"
   },
   {
      "game-title":"Red Ball 3",
      "gamesource":"redball3/index.html",
      "game-cover":"redball3.png"
   },
   {
      "game-title":"Snake",
      "gamesource":"snake/index.html",
      "game-cover":"snake.png"
   },
   {
      "game-title":"Pacman",
      "gamesource":"pacman/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Color Switch",
      "gamesource":"colorswitch/index.html",
      "game-cover":"colorswitch.png"
   },
   {
      "game-title":"Halloween 2016",
      "gamesource":"halloween2016/index.html",
      "game-cover":"logo.png"
   },
   {
      "game-title":"Game Maker Doodle",
      "gamesource":"gamemaker/index.html",
      "game-cover":"images.jpeg"
   },
   {
      "game-title":"The Impossible Game",
      "gamesource":"theimpossiblegame/index.html",
      "game-cover":"game-cover.jpg"
   },
   {
      "game-title":"Papas Freezeria",
      "gamesource":"papasfreezeria/index.html",
      "game-cover":"images.jpeg"
   },
   {
      "game-title":"Papas Pizzeria",
      "gamesource":"papaspizzeria/index.html",
      "game-cover":"images.jpeg"
   },
   {
      "game-title":"Idle Breakout",
      "gamesource":"idlebreakout/index.html",
      "game-cover":"game-cover.png"
   },
   {
      "game-title":"Stickman Hook",
      "gamesource":"stickman-hook/index.html",
      "game-cover":"icon.jpg"
   },
   {
      "game-title":"Drift Hunters",
      "gamesource":"drifthunters/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Rocket League",
      "gamesource":"rocketleague/index.html",
      "game-cover":"splash.webp"
   },
   {
      "game-title":"Little Alchemy",
      "gamesource":"littlealchemy/index.html",
      "game-cover":"images/192-alpha.png"
   },
   {
      "game-title":"Retro Bowl",
      "gamesource":"retrobowl/index.html",
      "game-cover":"img/icon.jpg"
   },
   {
      "game-title":"Tunnel Rush",
      "gamesource":"tunnelrush/index.html",
      "game-cover":"tunnel.jpg"
   },
   {
      "game-title":"Moto X3M",
      "gamesource":"motox3m/index.html",
      "game-cover":"splash.jpg"
   },
   {
      "game-title":"Moto X3M Winter",
      "gamesource":"motox3m-winter/index.html",
      "game-cover":"download.jpeg"
   },
   {
      "game-title":"Moto X3M Pool Party",
      "gamesource":"motox3m-pool/index.html",
      "game-cover":"splash.jpg"
   },
   {
      "game-title":"Five Nights at Freddy's",
      "gamesource":"fnaf/index.html",
      "game-cover":"splash.jpg"
   },
   {
      "game-title":"Burrito Bison",
      "gamesource":"burritobison/index.html",
      "game-cover":"Build/logo.png"
   },
   {
      "game-title":"Cut The Rope Holday",
      "gamesource":"cuttherope-holiday/index.html",
      "game-cover":"Holiday_Gift.webp"
   },
   {
      "game-title":"Helix Jump",
      "gamesource":"helixjump/index.html",
      "game-cover":"gameIcon.png"
   },
   {
      "game-title":"Clicker Heroes",
      "gamesource":"clickerheroes/index.html",
      "game-cover":"clicker-heroes.png"
   },
   {
      "game-title":"Jetpack Joyride",
      "gamesource":"jetpackjoyride/index.html",
      "game-cover":"logo.jpeg"
   },
   {
      "game-title":"Fruit Ninja",
      "gamesource":"fruitninja/index.html",
      "game-cover":"FruitNinjaTeaser.jpg"
   },
   {
      "game-title":"Tron",
      "gamesource":"tron/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Thirty Dollar Website",
      "gamesource":"thirtydollarwebsite/index.html",
      "game-cover":"assets/🗿.png"
   },
   {
      "game-title":"n-gon",
      "gamesource":"ngon/index.html",
      "game-cover":"favicon.ico"
   },
   {
      "game-title":"Subway Surfers",
      "gamesource":"subway-surfers-ny/index.html",
      "game-cover":"NewYorkIcon.png"
   },
   {
      "game-title":"Madalin Cars",
      "gamesource":"madalincars/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Run 3",
      "gamesource":"run3/index.html",
      "game-cover":"icon.jpeg"
   },
   {
      "game-title":"Dragon Ball Devolution",
      "gamesource":"dragonballdevolution/index.html",
      "game-cover":"images.jpeg"
   },
   {
      "game-title":"Run",
      "gamesource":"run/index.html",
      "game-cover":"icon.jpeg"
   },
   {
      "game-title":"Super Smash Flash",
      "gamesource":"supersmashflash/index.html",
      "game-cover":"ssf.jpg"
   },
   {
      "game-title":"Stickman Climb",
      "gamesource":"stickmanclimb/index.html",
      "game-cover":"icon.avif"
   },
   {
      "game-title":"Getaway Shooter",
      "gamesource":"getawayshooter/index.html",
      "game-cover":"Untitled.jpeg"
   },
   {
      "game-title":"Riddle School",
      "gamesource":"riddleschool/index.html",
      "game-cover":"RiddleSchool2.png"
   },
   {
      "game-title":"Riddle School 2",
      "gamesource":"riddleschool2/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Riddle School 3",
      "gamesource":"riddleschool3/index.html",
      "game-cover":"riddle-school-3.webp"
   },
   {
      "game-title":"Riddle School 4",
      "gamesource":"riddleschool4/index.html",
      "game-cover":"Untitled.jpeg"
   },
   {
      "game-title":"Riddle School 5",
      "gamesource":"riddleschool5/index.html",
      "game-cover":"Untitled.jpeg"
   },
   {
      "game-title":"Riddle Transfer",
      "gamesource":"riddleschooltransfer/index.html",
      "game-cover":"Untitled.jpeg"
   },
   {
      "game-title":"Riddle Transfer 2",
      "gamesource":"riddleschooltransfer2/index.html",
      "game-cover":"aUntitled.jpeg"
   },
   {
      "game-title":"Zombocalypse",
      "gamesource":"zombocalypse/index.html",
      "game-cover":"zombocalypse-2.webp"
   },
   {
      "game-title":"Papas Burgeria",
      "gamesource":"papasburgeria/index.html",
      "game-cover":"images.jpeg"
   },
   {
      "game-title":"Duck Life 5",
      "gamesource":"ducklife5/index.html",
      "game-cover":"ducklife5.png"
   },
   {
      "game-title":"Duck Life 6",
      "gamesource":"ducklife6/index.html",
      "game-cover":"ducklife5.png"
   },
   {
      "game-title":"webretro",
      "gamesource":"webretro/index.html",
      "game-cover":"assets/icons/icon204.png"
   },
   {
      "game-title":"osu!mania",
      "gamesource":"osumania/index.html",
      "game-cover":"mania.jpg"
   },
   {
      "game-title":"Five Nights at Freddy's 2",
      "gamesource":"fnaf2/index.html",
      "game-cover":"project/splash.webp"
   },
   {
      "game-title":"Five Nights at Freddy's 3",
      "gamesource":"fnaf3/index.html",
      "game-cover":"project/splash.webp"
   },
   {
      "game-title":"Five Nights at Freddy's 4",
      "gamesource":"fnaf4/index.html",
      "game-cover":"project/splash.webp"
   },
   {
      "game-title":"Temple Run 2",
      "gamesource":"templerun2/index.html",
      "game-cover":"img/icons/icon-128x128.png"
   },
   {
      "game-title":"Happy Wheels",
      "gamesource":"happywheels/index.html",
      "game-cover":"Untitled.jpeg"
   },
   {
      "game-title":"Fireboy & Watergirl 2",
      "gamesource":"fireboywatergirl2/index.html",
      "game-cover":"Untitled.jpeg"
   },
   {
      "game-title":"Fireboy & Watergirl 3",
      "gamesource":"fireboywatergirl3/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Fireboy & Watergirl 4",
      "gamesource":"fireboywatergirl4/index.html",
      "game-cover":"300.jpg"
   },
   {
      "game-title":"Rise Higher",
      "gamesource":"risehigher/index.html",
      "game-cover":"media/graphics/promo/Icons/128x128.png"
   },
   {
      "game-title":"Hextris",
      "gamesource":"hextris/index.html",
      "game-cover":"images/icons/apple-touch-152.png"
   },
   {
      "game-title":"Sprinter",
      "gamesource":"sprinter/index.html",
      "game-cover":"icon.jpeg"
   },
   {
      "game-title":"Amazing Rope Police",
      "gamesource":"amazing-rope-police/index.html",
      "game-cover":"splash.jpeg"
   },
   {
      "game-title":"Ruffle",
      "gamesource":"ruffle/index.html",
      "game-cover":"favicon-180.png"
   },
   {
      "game-title":"emulatorJS",
      "gamesource":"emulatorjs/index.html",
      "game-cover":"logo.png"
   },
   {
      "game-title":"Geometry Rash",
      "gamesource":"geometryrash/index.html",
      "game-cover":"icon-114.png"
   },
   {
      "game-title":"Bloons Tower Defense",
      "gamesource":"btd/index.html",
      "game-cover":"logo.webp"
   },
   {
      "game-title":"Bloons Tower Defense 2",
      "gamesource":"btd2/index.html",
      "game-cover":"logo.webp"
   },
   {
      "game-title":"Bloons Tower Defense 4",
      "gamesource":"btd4/index.html",
      "game-cover":"logo.jpg"
   },
   {
      "game-title":"Bloons Tower Defense 6",
      "gamesource":"btd6/index.html",
      "game-cover":"uwu.png"
   },
   {
      "game-title":"Bloons Tower Defense 5",
      "gamesource":"btd5/index.html",
      "game-cover":"wogo.png"
   },
   {
      "game-title":"Last Horizon",
      "gamesource":"lasthorizon/index.html",
      "game-cover":"wogo owo.jpg"
   },
   {
      "game-title":"1 on 1 Soccer",
      "gamesource":"1on1soccer/index.html",
      "game-cover":"logo.jpg"
   },
   {
      "game-title":"Among Us",
      "gamesource":"amongus/index.html",
      "game-cover":"amgojs]_.png"
   },
   {
      "game-title":"Bad Piggies",
      "gamesource":"badpiggies/index.html",
      "game-cover":"badpiggies.png"
   },
   {
      "game-title":"Sandtrix",
      "gamesource":"sandtrix/index.html",
      "game-cover":"assets/sprites/appicon.png"
   },
   {
      "game-title":"Blood Tournament",
      "gamesource":"bloodtournament/index.html",
      "game-cover":"blood-tournament.jpg"
   },
   {
      "game-title":"Gold Digger FRVR",
      "gamesource":"golddiggerfrvr/index.html",
      "game-cover":"images.jpeg"
   },
   {
      "game-title":"Retro Bowl College",
      "gamesource":"retrobowlcollege/index.html",
      "game-cover":"unnamed.png"
   },
   {
      "game-title":"We Become What We Behold",
      "gamesource":"wbwwb/index.html",
      "game-cover":"wbwwb.webp"
   },
   {
      "game-title":"Nut Simulator",
      "gamesource":"nutsim/index.html",
      "game-cover":"images/icon.png"
   },
   {
      "game-title":"Pokemon",
      "gamesource":"pokemon/index.html",
      "game-cover":"logo.jpg"
   },
   {
      "game-title":"Super Smash Bros",
      "gamesource":"supersmashbros/index.html",
      "game-cover":"logo.jpg"
   },
   {
      "game-title":"Skibidi 1 v 100",
      "gamesource":"skibiditoilet/index.html",
      "game-cover":"logo.png"
   },
   {
      "game-title":"Drive Mad",
      "gamesource":"drivemad/index.html",
      "game-cover":"icons/icon-128.png"
   },
   {
      "game-title":"Rooftop Snipers",
      "gamesource":"rooftopsnipers/index.html",
      "game-cover":"logo.png"
   },
   {
      "game-title":"Funny Shooter",
      "gamesource":"funnyshooter/index.html",
      "game-cover":"icon.jpeg"
   },
   {
      "game-title":"Monkey Mart",
      "gamesource":"monkeymart/index.html",
      "game-cover":"unnamed.png"
   },
   {
      "game-title":"Factory Balls",
      "gamesource":"factoryballs/index.html",
      "game-cover":"fac.png"
   },
   {
      "game-title":"Factory Balls Forever",
      "gamesource":"factoryballsforever/index.html",
      "game-cover":"fac.png"
   },
   {
      "game-title":"Funny Shooter 2",
      "gamesource":"funnyshooter2/index.html",
      "game-cover":"894abba63a6b23fed823f404831f444f.jpeg"
   },
   {
      "game-title":"Bad Time Simulator",
      "gamesource":"badtimesimulator/index.html",
      "game-cover":"icon-114.png"
   },
   {
      "game-title":"Commodore 64 Clicker",
      "gamesource":"commodoreclicker/index.html",
      "game-cover":"test.jpg"
   },
   {
      "game-title":"Stickman Boost",
      "gamesource":"stickmanboost/index.html",
      "game-cover":"base/img1.jpg"
   },
   {
      "game-title":"Stickman Golf",
      "gamesource":"stickmangolf/index.html",
      "game-cover":"gold.png"
   },
   {
      "game-title":"Basket Bros",
      "gamesource":"basketbros/index.html",
      "game-cover":"thumb.jpg"
   },
   {
      "game-title":"justfall.lol",
      "gamesource":"justfalllol/index.html",
      "game-cover":"unnamed.png"
   },
   {
      "game-title":"Doge Miner",
      "gamesource":"dogeminer/index.html",
      "game-cover":"img/dogeminer_300x300.png"
   },
   {
      "game-title":"Soccer Random",
      "gamesource":"soccerrandom/index.html",
      "game-cover":"test.png"
   },
   {
      "game-title":"Basket Random",
      "gamesource":"basketrandom/index.html",
      "game-cover":"test.png"
   },
   {
      "game-title":"Boxing Random",
      "gamesource":"boxingrandom/index.html",
      "game-cover":"512x512.jpg"
   },
   {
      "game-title":"Funny Mad Racing",
      "gamesource":"funnymadracing/index.html",
      "game-cover":"logo.webp"
   },
   {
      "game-title":"hole.io",
      "gamesource":"holeio/index.html",
      "game-cover":"feature800x470.png"
   },
   {
      "game-title":"Time Shooter",
      "gamesource":"timeshooter1/index.html",
      "game-cover":"logo.png"
   },
   {
      "game-title":"Time Shooter 2",
      "gamesource":"timeshooter2/index.html",
      "game-cover":"ts2.jpg"
   },
   {
      "game-title":"Time Shooter 3",
      "gamesource":"timeshooter3/index.html",
      "game-cover":"logo.png"
   },
   {
      "game-title":"Townscaper",
      "gamesource":"townscaper/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Bad Ice Cream",
      "gamesource":"badicecream/index.html",
      "game-cover":"bad-ice-cream.png"
   },
   {
      "game-title":"Bad Ice Cream 2",
      "gamesource":"badicecream2/index.html",
      "game-cover":"bad-ice-cream-2.png"
   },
   {
      "game-title":"Bad Ice Cream 3",
      "gamesource":"badicecream3/index.html",
      "game-cover":"bad-ice-cream-3.png"
   },
   {
      "game-title":"Bob the Robber 2",
      "gamesource":"bobtherobber2/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Boxing Physics 2",
      "gamesource":"boxingphysics2/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Burger and Frights",
      "gamesource":"burgerandfrights/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Flippy Fish",
      "gamesource":"flippyfish/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Knife Hit",
      "gamesource":"knifehit/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Lazy Jump 3D",
      "gamesource":"lazyjump3d/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Moto X3M Spooky",
      "gamesource":"motox3m-spooky/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Rooftop Snipers 2",
      "gamesource":"rooftopsnipers2/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Skibidi Toilet Attack",
      "gamesource":"skibiditoiletattack/index.html",
      "game-cover":"logo.png"
   },
   {
      "game-title":"Tiny Fishing",
      "gamesource":"tinyfishing/index.html",
      "game-cover":"thumb.png"
   },
   {
      "game-title":"TU-95",
      "gamesource":"tu95/index.html",
      "game-cover":"tu-95.webp"
   },
   {
      "game-title":"TU-46",
      "gamesource":"tu46/index.html",
      "game-cover":"tu-46.webp"
   },
   {
      "game-title":"Russian Car Driver",
      "gamesource":"russiancardriver/index.html",
      "game-cover":"russian-car-driver.webp"
   },
   {
      "game-title":"Legend of Zelda - Ocarina of Time",
      "gamesource":"ocarinaoftime/index.html",
      "game-cover":"oc.jpg"
   },
   {
      "game-title":"Metroid: Zero Mission",
      "gamesource":"metroidzeromission/index.html",
      "game-cover":"zero.jpeg"
   },
   {
      "game-title":"Guilty Gear",
      "gamesource":"guiltygear/index.html",
      "game-cover":"ggx.jpg"
   },
   {
      "game-title":"A Dark Room",
      "gamesource":"adarkroom/index.html",
      "game-cover":"favicon.ico"
   },
   {
      "game-title":"Fancy Pants Adventures",
      "gamesource":"fancypantsadventures/index.html",
      "game-cover":"fpa.webp"
   },
   {
      "game-title":"Fancy Pants Adventures 2",
      "gamesource":"fancypantsadventures2/index.html",
      "game-cover":"fpa2.avif"
   },
   {
      "game-title":"Line Rider",
      "gamesource":"linerider/index.html",
      "game-cover":"boosh.png"
   },
   {
      "game-title":"Funny Ball Game",
      "gamesource":"funnyballgame/index.html",
      "game-cover":"ball.jpg"
   },
   {
      "game-title":"Henry Stickmin - Stealing the Diamond",
      "gamesource":"stealingthediamond/index.html",
      "game-cover":"diamante.avif"
   },
   {
      "game-title":"Henry Stickmin - Breaking the Bank",
      "gamesource":"breakingthebank/index.html",
      "game-cover":"balling.avif"
   },
   {
      "game-title":"Henry Stickmin - Escaping the Prison",
      "gamesource":"escapingtheprison/index.html",
      "game-cover":"pwison.avif"
   },
   {
      "game-title":"Henry Stickmin - Fleeing the Complex",
      "gamesource":"fleeingthecomplex/index.html",
      "game-cover":"flee.jpg"
   },
   {
      "game-title":"Henry Stickmin - Infiltrating the Airship",
      "gamesource":"infiltratingtheairship/index.html",
      "game-cover":"air.avif"
   },
   {
      "game-title":"Pandemic",
      "gamesource":"pandemic/index.html",
      "game-cover":"sddefault.jpg"
   },
   {
      "game-title":"Pandemic 2",
      "gamesource":"pandemic2/index.html",
      "game-cover":"pan2.webp"
   },
   {
      "game-title":"Age of War",
      "gamesource":"ageofwar/index.html",
      "game-cover":"warofage.jpg"
   },
   {
      "game-title":"Soundboard",
      "gamesource":"soundboard/index.html",
      "game-cover":"bleep.png"
   },
   {
      "game-title":"The Impossible Quiz",
      "gamesource":"theimpossiblequiz/index.html",
      "game-cover":"tiq.avif"
   },
   {
      "game-title":"2D Rocket League",
      "gamesource":"2drocketleague/index.html",
      "game-cover":"unnamed.png"
   },
   {
      "game-title":"Pizza Tower",
      "gamesource":"pizzatower/index.html",
      "game-cover":"images/menubg.png"
   },
   {
      "game-title":"Monster Tracks",
      "gamesource":"monstertracks/index.html",
      "game-cover":"webapp/cover.jpg"
   },
   {
      "game-title":"Totally Accurate Battle Simulator",
      "gamesource":"tabs/index.html",
      "game-cover":"unnamed.png"
   },
   {
      "game-title":"CSGO Case Clicker",
      "gamesource":"csgoclicker/index.html",
      "game-cover":"images/case1.png"
   },
   {
      "game-title":"The Final Earth 2",
      "gamesource":"thefinalearth2/index.html",
      "game-cover":"icons/favicon.png"
   },
   {
      "game-title":"Baldi's Basics",
      "gamesource":"baldis-basics/index.html",
      "game-cover":"splash.png"
   },
   {
      "game-title":"Cubefield",
      "gamesource":"cubefield/index.html",
      "game-cover":"assets/unnamed.png"
   },
   {
      "game-title":"Bit Planes",
      "gamesource":"bit-planes/index.html",
      "game-cover":"bitplanes.png"
   },
   {
      "game-title":"Snow Rider 3D",
      "gamesource":"snowrider3d/index.html",
      "game-cover":"snow.png"
   },
   {
      "game-title":"Dadish",
      "gamesource":"dadish/index.html",
      "game-cover":"favicon.png"
   },
   {
      "game-title":"Dadish 2",
      "gamesource":"dadish2/index.html",
      "game-cover":"favicon.png"
   },
   {
      "game-title":"Dadish 3",
      "gamesource":"dadish3/index.html",
      "game-cover":"splash.png"
   },
   {
      "game-title":"Watermelon Game",
      "gamesource":"watermelongame/index.html",
      "game-cover":"assets/sprites/tittle.png"
   },
   {
      "game-title":"Crimson Fantasia",
      "gamesource":"crimsonfantasia/index.html",
      "game-cover":"14qAOu.png"
   },
   {
      "game-title":"Geometry Dash Lite",
      "gamesource":"gdlite/index.html",
      "game-cover":"logo.png"
   },
   {
      "game-title":"Virtual x86",
      "gamesource":"v86/index.html",
      "game-cover":"favicon.ico"
   },
   {
      "game-title":"Idle Research",
      "gamesource":"idleresearch/index.html",
      "game-cover":"cover-1660205761867.png"
   },
   {
      "game-title":"10 Minutes Till Dawn",
      "gamesource":"10minutestilldawn/index.html",
      "game-cover":"splash.png"
   },
   {
      "game-title":"Friday Night Funkin: Mid Fight Masses",
      "gamesource":"fnfmidfight/index.html",
      "game-cover":"fnfmidfight.png"
   },
   {
      "game-title":"Papas Donuteria",
      "gamesource":"papasdonuteria/index.html",
      "game-cover":"papasdonuteria.png"
   },
   {
      "game-title":"Papas Pancakeria",
      "gamesource":"papaspancakeria/index.html",
      "game-cover":"papaspancakeria.png"
   },
   {
      "game-title":"Papas Scooperia",
      "gamesource":"papasscooperia/index.html",
      "game-cover":"papasscooperia.png"
   },
   {
      "game-title":"Papas Tacomia",
      "gamesource":"papastacomia/index.html",
      "game-cover":"papastacomia.png"
   },
   {
      "game-title":"Territorial.io",
      "gamesource":"territorialio/index.html",
      "game-cover":"territorialio.png"
   },
   {
      "game-title":"Theme Hotel",
      "gamesource":"themehotel/index.html",
      "game-cover":"themehotel.png"
   },
   {
      "game-title":"Thumb Fighter",
      "gamesource":"thumbfighter/index.html",
      "game-cover":"thumbfighter.png"
   },
   {
      "game-title":"The Enchanted Cave 2",
      "gamesource":"enchantedcave2/index.html",
      "game-cover":"icon.png"
   },
   {
      "game-title":"Animal Crossing Wild World",
      "gamesource":"animalcrossingwildworld/index.html",
      "game-cover":"animalcrossingwildworld.png"
   },
   {
      "game-title":"Banjo Kazooie",
      "gamesource":"banjokazooie/index.html",
      "game-cover":"banjokazooie.png"
   },
   {
      "game-title":"Donkey Kong 64",
      "gamesource":"donkeykong64/index.html",
      "game-cover":"donkeykong64.png"
   },
   {
      "game-title":"Doom 64",
      "gamesource":"doom64/index.html",
      "game-cover":"doom64.png"
   },
   {
      "game-title":"Goldeneye 007",
      "gamesource":"goldeneye/index.html",
      "game-cover":"goldeneye007.png"
   },
   {
      "game-title":"Majora's Mask",
      "gamesource":"majorasmask/index.html",
      "game-cover":"majorasmask.png"
   },
   {
      "game-title":"Mario Kart DS",
      "gamesource":"mariokartds/index.html",
      "game-cover":"mariokartds.png"
   },
   {
      "game-title":"Mario Party",
      "gamesource":"marioparty/index.html",
      "game-cover":"marioparty.png"
   },
   {
      "game-title":"Mario Party 2",
      "gamesource":"marioparty2/index.html",
      "game-cover":"marioparty2.png"
   },
   {
      "game-title":"Mario Party 3",
      "gamesource":"marioparty3/index.html",
      "game-cover":"marioparty3.png"
   },
   {
      "game-title":"Mario Party DS",
      "gamesource":"mariopartyds/index.html",
      "game-cover":"mariopartyds.png"
   },
   {
      "game-title":"Nintendogs",
      "gamesource":"nintendogs/index.html",
      "game-cover":"nintendogs.png"
   },
   {
      "game-title":"Papas Bakeria",
      "gamesource":"papasbakeria/index.html",
      "game-cover":"papasbakeria.png"
   },
   {
      "game-title":"Papas Cheeseria",
      "gamesource":"papascheeseria/index.html",
      "game-cover":"papascheeseria.png"
   },
   {
      "game-title":"Papas Pastaria",
      "gamesource":"papaspastaria/index.html",
      "game-cover":"papaspastaria.png"
   },
   {
      "game-title":"Papas Sushiria",
      "gamesource":"papassushiria/index.html",
      "game-cover":"papassushiria.png"
   },
   {
      "game-title":"Papas Wingeria",
      "gamesource":"papaswingeria/index.html",
      "game-cover":"papaswingeria.png"
   },
   {
      "game-title":"Paper Mario",
      "gamesource":"papermario/index.html",
      "game-cover":"papermario.png"
   },
   {
      "game-title":"Star Fox 64",
      "gamesource":"starfox64/index.html",
      "game-cover":"starfox64.png"
   },
   {
      "game-title":"Super Mario 64 DS",
      "gamesource":"supermario64ds/index.html",
      "game-cover":"supermario64ds.png"
   }
];

const formattedData = formatGameData(gameDataArray);

// Export formattedData array
module.exports = formattedData;
