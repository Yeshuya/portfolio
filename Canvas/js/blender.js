var canvas = document.getElementById("blender");
	var ctx = canvas.getContext("2d");

/*Layer 1*/
	ctx.beginPath();
	ctx.moveTo(50,180);
  ctx.quadraticCurveTo(60, 140, 80, 130);
  ctx.lineTo(118,130);
  ctx.quadraticCurveTo(140, 145, 145, 180);
  ctx.closePath();
  ctx.fillStyle = "#C60404";
	ctx.fill();

/*Layer 2*/
	ctx.beginPath();
	ctx.moveTo(80,130);
  ctx.lineTo(118,130);
  ctx.lineTo(118,127);
  ctx.lineTo(80,127);
  ctx.closePath();
  ctx.fillStyle = "#000";
	ctx.fill();

/*Layer 3*/
	ctx.beginPath();
	ctx.moveTo(80,127);
  ctx.lineTo(58,50);
  ctx.lineTo(140,50);
  ctx.lineTo(118,127);
  ctx.closePath();
  ctx.fillStyle = "#E7DBDB";
	ctx.fill();

/*Layer 4*/
  ctx.beginPath();
  ctx.moveTo(130,60);
  ctx.lineTo(150,65);
  ctx.lineTo(150,90);
  ctx.lineTo(120,105);
  ctx.lineTo(120,100);
  ctx.lineTo(143,88);
  ctx.lineTo(143,70);
  ctx.lineTo(130,67);
  ctx.closePath();
  ctx.fillStyle = "#E7DBDB";
	ctx.fill();

/*Layer 5*/
  ctx.beginPath();
  ctx.moveTo(55,50);
  ctx.lineTo(143,50);
  ctx.lineTo(143,45);
  ctx.lineTo(55,45);
  ctx.closePath();
  ctx.fillStyle = "#C60404";
	ctx.fill();

/*Layer 6*/
  ctx.beginPath();
  ctx.moveTo(90,45);
  ctx.lineTo(110,45);  
  ctx.lineTo(110,35); 
  ctx.lineTo(90,35); 
  ctx.closePath();
  ctx.fillStyle = "#000";
	ctx.fill();

/*Layer 7*/
  ctx.beginPath();
	ctx.moveTo(85,127);
  ctx.lineTo(72,80);
  ctx.quadraticCurveTo(100, 70, 128, 70);
  ctx.lineTo(113,127);
  ctx.closePath();
  ctx.fillStyle = "#E4901E";
	ctx.fill();

/*Layer 8*/
  ctx.beginPath();
  ctx.moveTo(78,145);
  ctx.lineTo(120,145);
  ctx.lineTo(120,155);
  ctx.lineTo(78,155);
  ctx.closePath();
  ctx.fillStyle = "#fff";
	ctx.fill();
  