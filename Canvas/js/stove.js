var canvas = document.getElementById("stove");
	var ctx = canvas.getContext("2d");

/*Layer 1*/
  ctx.beginPath();
	ctx.moveTo(30,190);
  ctx.lineTo(30,40);
  ctx.lineTo(170,40);
  ctx.lineTo(170,190);
  ctx.closePath();
	ctx.fillStyle = "#5B5A59";
	ctx.fill();

/*Layer 2*/
  ctx.beginPath();
	ctx.moveTo(40,160);
  ctx.lineTo(40,85);
  ctx.lineTo(160,85);
  ctx.lineTo(160,160);
  ctx.closePath();
	ctx.fillStyle = "#333332";
	ctx.fill();
  
/*Line 1*/
  ctx.beginPath();
  ctx.moveTo(30,70);
  ctx.lineTo(170,70);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#333332";
  ctx.stroke();

/*Line 2*/
  ctx.beginPath();
  ctx.moveTo(30,175);
  ctx.lineTo(170,175);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#333332";
  ctx.stroke();

/*Layer 3*/
  ctx.beginPath();
  ctx.arc(50, 54, 10, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "white";
	ctx.fill();

/*Line 3*/
  ctx.beginPath();
  ctx.moveTo(50,55);
  ctx.lineTo(50,43);
  ctx.lineWidth = 3;
  ctx.stroke();

/*Layer 4*/
  ctx.beginPath();
  ctx.arc(80, 54, 10, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "white";
	ctx.fill();

/*Line 4*/
  ctx.beginPath();
  ctx.moveTo(80,55);
  ctx.lineTo(80,43);
  ctx.lineWidth = 3;
  ctx.stroke();

/*Layer 5*/
  ctx.beginPath();
  ctx.arc(110, 54, 10, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "white";
	ctx.fill();

/*Line 5*/
  ctx.beginPath();
  ctx.moveTo(110,55);
  ctx.lineTo(110,43);
  ctx.lineWidth = 3;
  ctx.stroke();

/*Layer 6*/
  ctx.beginPath();
  ctx.moveTo(35,40);
  ctx.lineTo(75,40);
  ctx.lineTo(75,35);
  ctx.lineTo(35,35);
  ctx.closePath();
  ctx.fillStyle = "black";
	ctx.fill();

/*Layer 6*/
  ctx.beginPath();
  ctx.moveTo(80,40);
  ctx.lineTo(125,40);
  ctx.lineTo(125,35);
  ctx.lineTo(80,35);
  ctx.closePath();
  ctx.fillStyle = "black";
	ctx.fill();

/*Layer 6*/
  ctx.beginPath();
  ctx.moveTo(130,40);
  ctx.lineTo(165,40);
  ctx.lineTo(165,35);
  ctx.lineTo(130,35);
  ctx.closePath();
  ctx.fillStyle = "black";
	ctx.fill();


  