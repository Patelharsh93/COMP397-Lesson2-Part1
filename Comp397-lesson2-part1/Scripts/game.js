/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
//Game framework variable
var canvas = document.getElementById("canvas");
var stage;

//Game variables
var helloLabel;

function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); //framerate for the game
    createjs.Ticker.on("tick", gameLoop);

    main();
}

//Our main gameLoop- refresed 60 fps
function gameLoop() {
    stage.update();
}

//Our main function
function main() {
    console.log("Game is Running");
    helloLabel = new createjs.Text("hello World!", "40px Consolas", "#00000");

    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 160;

    stage.addChild(helloLabel);
}
//# sourceMappingURL=game.js.map
