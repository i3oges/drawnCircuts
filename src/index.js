function drawOrGate(startX, startY) {
  clear();
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + 20, startY);
  ctx.quadraticCurveTo(startX + 40, startY, startX + 70, startY + 35);
  ctx.quadraticCurveTo(startX + 40, startY + 65, startX + 20, startY + 65);
  ctx.lineTo(startX, startY + 65);
  ctx.arcTo(startX + 20, startY + 25, startX, startY, 50);
  ctx.closePath();
  ctx.stroke();
}

function drawAndGate(startX, startY) {
  clear();
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + 20, startY);
  ctx.arcTo(startX + 70, startY + 5, startX + 70, startY + 70, 35);
  ctx.arcTo(startX + 70, startY + 65, startX + 20, startY + 65, 35);
  ctx.lineTo(startX, startY + 65);
  ctx.lineTo(startX, startY);
  ctx.closePath();
  ctx.stroke();
}

function drawNot() {
  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(125, 85, 5, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawXorGate(startX, startY) {
  clear();

  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + 20, startY);
  ctx.quadraticCurveTo(startX + 40, startY, startX + 70, startY + 35);
  ctx.quadraticCurveTo(startX + 40, startY + 65, startX + 20, startY + 65);
  ctx.lineTo(startX, startY + 65);
  ctx.arcTo(startX + 20, startY + 25, startX, startY, 50);
  ctx.moveTo(startX - 8, startY + 65);
  ctx.arcTo(startX + 20, startY + 33, startX - 8, startY, 50);
  ctx.stroke();
}

function drawBuffer(startX, startY) {
  clear();

  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + 70, startY + 35);
  ctx.lineTo(startX, startY + 65);
  ctx.closePath();
  ctx.stroke();
}

function writeMessage(message) {
  document.getElementById("coords").innerText = message;
}
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function clear() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

(function() {
  let startX = 50;
  let startY = 50;
  const orButton = document.getElementById("orGate");
  const xorButton = document.getElementById("xorGate");
  const clearButton = document.getElementById("clear");
  const andButton = document.getElementById("andGate");
  const notButton = document.getElementById("not");
  const bufferButton = document.getElementById("buffer");

  drawOrGate(startX, startY);
  drawNot();
  clearButton.addEventListener("click", clear);
  orButton.addEventListener("click", function() {
    drawOrGate(startX, startY);
  });
  xorButton.addEventListener("click", function() {
    drawXorGate(startX, startY);
  });
  andButton.addEventListener("click", function() {
    drawAndGate(startX, startY);
  });
  notButton.addEventListener("click", function() {
    drawNot();
  });
  bufferButton.addEventListener("click", function() {
    drawBuffer(startX, startY);
  });

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.addEventListener(
    "mousemove",
    function(evt) {
      var mousePos = getMousePos(canvas, evt);
      var message = "Mouse position: " + mousePos.x + ", " + mousePos.y;
      writeMessage(message);
    },
    false
  );
})();
