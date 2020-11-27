var canvas = document.getElementById("fan");
	var ctx = canvas.getContext("2d");

/*Line 1*/
  ctx.beginPath();
  ctx.moveTo(99,160);
  ctx.lineTo(99,100);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#333332";
  ctx.closePath;
  ctx.stroke();

/*Layer 7*/
	ctx.beginPath();
	ctx.moveTo(100,90);
  ctx.lineTo(70,140);
  ctx.quadraticCurveTo(30, 125, 40, 90);
  ctx.closePath();
  ctx.fillStyle = "#96DAD7";
	ctx.fill();

/*Layer 8*/
	ctx.beginPath();
	ctx.moveTo(100,90);
  ctx.lineTo(130,140);
  ctx.quadraticCurveTo(160, 125, 160, 90);
  ctx.closePath();
  ctx.fillStyle = "#96DAD7";
	ctx.fill();

/*Layer 8*/
	ctx.beginPath();
	ctx.moveTo(100,90);
  ctx.lineTo(68,35);
  ctx.quadraticCurveTo(100, 23, 133, 35);
  ctx.closePath();
  ctx.fillStyle = "#96DAD7";
	ctx.fill();


/*Layer 1*/
	ctx.beginPath();
	ctx.moveTo(50,180);
  ctx.quadraticCurveTo(100, 125, 145, 180);
  ctx.closePath();
  ctx.fillStyle = "#96DAD7";
	ctx.fill();

/*Layer 2*/
  ctx.beginPath();
  ctx.arc(83, 165, 5, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "white";
	ctx.fill();

/*Layer 4*/
  ctx.beginPath();
  ctx.arc(99, 165, 5, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "white";
	ctx.fill();

/*Layer 5*/
  ctx.beginPath();
  ctx.arc(115, 165, 5, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "white";
	ctx.fill();

/*Layer 6*/
  ctx.beginPath();
  ctx.arc(99, 90, 20, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "#B2C2C1";
	ctx.fill();


