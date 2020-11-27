var canvas = document.getElementById("tv");
	var ctx = canvas.getContext("2d");

/*Layer 6*/
  ctx.beginPath();
  ctx.moveTo(30,0);
  ctx.lineTo(100,60);
  ctx.lineTo(170,0);
  ctx.stroke();
	
/*Layer 1*/
	ctx.beginPath();
	ctx.moveTo(30,35);
	ctx.lineTo(170,35);
	ctx.arc(170,55,20,5,0);
	ctx.lineTo(190,140);
	ctx.arc(170,150,20,0,1.5);
	ctx.lineTo(40,170);
	ctx.arc(30,150,20,1.5,3);
	ctx.lineTo(10,60);
  ctx.arc(30,55,20,3.5,4.5);
  ctx.closePath();
	ctx.fillStyle = "#2A3C43";
	ctx.fill();

/*Layer 2*/
  ctx.beginPath();
	ctx.moveTo(40,50);
  ctx.lineTo(155,50);
  ctx.arc(155,70,20,5,0);
  ctx.lineTo(175,125);
  ctx.arc(155,130,20,0,1.5);
  ctx.lineTo(60,150);
  ctx.arc(45,130,20,1.5,3);
  ctx.lineTo(25,70);
  ctx.arc(45,70,20,3.5,4.5);
  ctx.closePath();
	ctx.fillStyle = "#677174";
	ctx.fill();

/*Layer 3*/
  ctx.beginPath();
  ctx.arc(45, 160, 7, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "#677174";
	ctx.fill();

/*Layer 4*/
  ctx.beginPath();
  ctx.arc(61, 160, 5, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "#677174";
	ctx.fill();

/*Layer 5*/
  ctx.beginPath();
  ctx.arc(75, 160, 5, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "#677174";
	ctx.fill();






