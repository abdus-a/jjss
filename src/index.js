let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canvas_height = 500;
let canvas_width = 500;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var paddleHeight = 30;
var player_Width = 10;
var paddleX = 0;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var player_x = 0;
var keys = {};
let player_y = 420;
let max_jump_height = 
  //Max jump height 0, 390
  //ground y x 0,430
  document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  } else if (e.key === " " || e.keyCode === 32) {
    upPressed = true;
  }
}
//background
function drawBackGround() {
  ctx.beginPath();
  ctx.rect(0, 0, canvas_width, canvas_height);
  ctx.fillStyle = "#33FFEC";
  ctx.fill();
  ctx.closePath();
}

//ground
function drawGround() {
  ctx.beginPath();
  ctx.rect(0, 440, 500, 60);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

function drwaPlayer() {
  ctx.beginPath();
  ctx.rect(player_x, player_y, 10, 20);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}
function testLocation() {
  ctx.beginPath();
  ctx.rect(0, 430, 10, 10);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}
//Max jump height 0, 390
//ground y x 0,430
//player max X 0,430
//player max Y 490,430
function drwa() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBackGround();
  drawGround();
  drwaPlayer();
  testLocation();
  if (rightPressed) {
    player_x += 7;
    if (player_x + player_Width > canvas.width) {
      player_x = canvas.width - player_Width;
    }
  } else if (leftPressed) {
    player_x -= 7;
    if (player_x < 0) {
      player_x = 0;
    } else if (upPressed) {
      // Y should be increased for jump
    }
  }
}
setInterval(drwa, 10);
//Kye handler
