var canvas = document.getElementById("toaster");
	var ctx = canvas.getContext("2d");

/*Layer 4*/
	ctx.beginPath();
	ctx.moveTo(50,150);
  ctx.lineTo(80,150);
  ctx.lineTo(80,155);
  ctx.lineTo(50,155);
  ctx.closePath();
  ctx.fillStyle = "black";
	ctx.fill();

/*Layer 5*/
	ctx.beginPath();
	ctx.moveTo(150,150);
  ctx.lineTo(120,150);
  ctx.lineTo(120,155);
  ctx.lineTo(150,155);
  ctx.closePath();
  ctx.fillStyle = "black";
	ctx.fill();

/*Layer 5*/
	ctx.beginPath();
	ctx.moveTo(78,70);
  ctx.lineTo(78,50);
  ctx.arc(80,42,8,2,4.5);
  ctx.quadraticCurveTo(100, 20, 125, 37);
  ctx.lineTo(116,34);
  ctx.arc(122,41,7,-2,1.5);
  ctx.lineTo(122,70);
  ctx.closePath();
  ctx.fillStyle = "#C68958";
	ctx.fill();


/*Layer 1*/
    ctx.beginPath();
	ctx.moveTo(40,140);
  ctx.lineTo(40,90);
  ctx.quadraticCurveTo(45, 60, 70, 60);
  ctx.lineTo(75,70);
  ctx.lineTo(125,70);
  ctx.lineTo(130,60);
  ctx.quadraticCurveTo(155, 60, 160, 90);
  ctx.lineTo(160,140);
  ctx.lineTo(40,140);
  ctx.closePath();
  ctx.fillStyle = "#C60404";
	ctx.fill();

/*Layer 2*/
	ctx.beginPath();
	ctx.moveTo(40,135);
  ctx.lineTo(160,135);
  ctx.lineTo(160,150);
  ctx.lineTo(40,150);
  ctx.closePath();
  ctx.fillStyle = "#7F0202";
	ctx.fill();

/*Line 1*/
  ctx.beginPath();
  ctx.moveTo(60,95);
  ctx.lineTo(107,95);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";
  ctx.stroke();

/*Line 2*/
  ctx.beginPath();
  ctx.moveTo(60,105);
  ctx.lineTo(107,105);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";
  ctx.stroke();

/*Line 3*/
  ctx.beginPath();
  ctx.moveTo(60,115);
  ctx.lineTo(107,115);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";
  ctx.stroke();

/*Layer 3*/
  ctx.beginPath();
  ctx.arc(130, 105, 10, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();
  