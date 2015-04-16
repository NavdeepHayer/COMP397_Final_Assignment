/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="typings/stats/stats.d.ts" />

/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/foreground.ts" />

/// <reference path="states/gameplay.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/instructions.ts" />



// Global game Variables
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;
var stats: Stats = new Stats();
var currentScore = 0;
var highScore = 0;


// Game State Variables
var currentState: number;
var currentStateFunction: any;
var stateChanged: boolean = false;

var gamePlay: states.GamePlay;
var gameOver: states.GameOver;
var menu: states.Menu;
var inst: states.instructions;

var manifest = [
    { id: "Astroid", src: "assets/images/astroid.png" },
    { id: "Astronaut", src: "assets/images/Astronaut.png" },
    { id: "Background", src: "assets/images/gamebackground.png" },
    { id: "MenuBackground", src: "assets/images/menubackground.png" },
    { id: "instscreen", src: "assets/images/instructions.png" },
    { id: "foreground", src: "assets/images/foreGROUND.png" },
    { id: "SpaceShip", src: "assets/images/SpaceShip.png" },
    { id: "playButton", src: "assets/images/startgame.png" },
    { id: "tryAgainButton", src: "assets/images/tryAgain.png" },
    { id: "BackGround", src: "assets/audio/Final.mp4" },
    { id: "PowerUp", src: "assets/audio/powerup.wav" },
    { id: "Explosion", src: "assets/audio/bang.wav" },
    { id: "gameover", src: "assets/audio/Gameover.mp3" },
    { id: "MainMenu", src: "assets/audio/Menu.mp3" },
    { id: "Game", src: "assets/audio/Gamplay.mp3" },
    { id: "hardcore", src: "assets/images/hardcore.png" },
    { id: "inst", src: "assets/images/inst.png" },
    { id: "bonus", src: "assets/images/HL2.png" },
    { id: "back", src: "assets/images/back.png" },

];


function Preload() {
    assetLoader = new createjs.LoadQueue(); // create a new preloader
    assetLoader.installPlugin(createjs.Sound); // need plugin for sounds
    assetLoader.on("complete", init, this); // when assets finished preloading - then init function

    assetLoader.loadManifest(manifest);
}


function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

function setupStats() {
    stats.setMode(0); 

    // align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';

    document.body.appendChild(stats.domElement);
}


function gameLoop() {
    stats.begin();

    if (stateChanged) {
        changeState(currentState);
        stateChanged = false;
    }
    else {
        currentStateFunction.update();
    }
        
    stats.end();
}


function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            menu = new states.Menu();
            currentStateFunction = menu;
            break;

        case constants.PLAY_STATE:
            // instantiate game play screen
            gamePlay = new states.GamePlay();
            currentStateFunction = gamePlay;
            break;

        case constants.GAME_OVER_STATE:
            // instantiate game over screen
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;

        case constants.INSTRUCTIONS:
            // instantiate game over screen
            inst = new states.instructions();
            currentStateFunction = inst;
            break;
    }
}






