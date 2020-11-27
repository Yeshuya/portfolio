var canvas = document.getElementById("ref");
	var ctx = canvas.getContext("2d");

/*Layer 3*/
  ctx.beginPath();
	ctx.moveTo(53,85);
	ctx.lineTo(158,85);
  ctx.lineTo(158,100);
  ctx.lineTo(53,100);
  ctx.closePath();
  ctx.fillStyle = "#A19494";
	ctx.fill();

/*Layer 1*/
	ctx.beginPath();
	ctx.moveTo(60,0);
	ctx.lineTo(150,0);
  ctx.arc(150,10,10,5,0);
  ctx.lineTo(160,90);
  ctx.lineTo(50,90);
  ctx.lineTo(50,15);
  ctx.arc(60,10,10,3,4.5);
  ctx.closePath();
	ctx.fillStyle = "#C60404";
	ctx.fill();

/*Layer 2*/
	ctx.beginPath();
	ctx.moveTo(50,95);
	ctx.lineTo(160,95);
  ctx.lineTo(160,190);
  ctx.arc(150,190,10,0,1.5);
  ctx.lineTo(60,200);
  ctx.arc(60,190,10,1.5,3);
  ctx.closePath();
  ctx.fillStyle = "#C60404";
	ctx.fill();

/*Layer 3*/
  ctx.beginPath();
	ctx.moveTo(60,40);
	ctx.lineTo(70,40);
  ctx.lineTo(70,80);
  ctx.lineTo(60,80);
  ctx.closePath();
  ctx.fillStyle = "white";
	ctx.fill();

/*Layer 4*/
  ctx.beginPath();
	ctx.moveTo(60,105);
	ctx.lineTo(70,105);
  ctx.lineTo(70,150);
  ctx.lineTo(60,150);
  ctx.closePath();
  ctx.fillStyle = "white";
	ctx.fill();

/*Layer 5*/
  ctx.beginPath();
	ctx.moveTo(125,20);
	ctx.lineTo(145,20);
  ctx.lineTo(145,40);
  ctx.lineTo(125,40);
  ctx.closePath();
  ctx.fillStyle = "white";
	ctx.fill();


