let canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d", {antialias: true});

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let mSeconds = date.getMilliseconds();
let ticks = 0;

if(date.getHours() > 12)
{
  document.body.style.backgroundColor = '#364156';
}
else
{
  document.body.style.backgroundColor = '#F1E9DA';
}

function update()
{
  requestAnimationFrame(update);

  if(ticks === 10)
  {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    mSeconds = date.getMilliseconds();
    reDraw();
    ticks = 0;
  }
  ticks++;
}

function draw(time, deg, color, radius)
{
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = 50;
  context.arc(canvas.width / 2, canvas.height / 2, radius, 0, time * deg);
  context.stroke();
}

function reDraw()
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  draw(mSeconds, (180 / Math.PI), '#FFFFFF', 150);
  draw(seconds, (180 / Math.PI), '#BDD9BF', 200);
  draw(minutes, (180 / Math.PI), '#FFC857', 250);
  draw(hours, (180 / Math.PI), '#2E4052', 300);
}

update();




























/*draw();
context.fillStyle = "#FF0000";
context.fillRect(x + px, y + py, 90, 90);

function move(event)
{
  switch(event.keyCode)
  {
    case 119:
      y -= 90;
      py--;
      console.log('up');
      break;
    case 115:
      y += 90;
      py++;
      console.log('down');
      break;
    case 100:
      x += 90;
      px++;
      console.log('right');
      break;
    case 97:
      x -= 90;
      px--;
      console.log('left');
      break;
  }
  context.clearRect(0,0, canvas.width, canvas.height);
  draw();
  context.fillStyle = "#FF0000";
  context.fillRect(x + px, y + py, 90, 90);
}

function draw()
{

}*/
