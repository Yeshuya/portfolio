var canvas = document.getElementById("radio");
	var ctx = canvas.getContext("2d");

/*Layer 6*/
  ctx.beginPath();
  ctx.moveTo(30,0);
  ctx.lineTo(150,40);
  ctx.stroke();

/*Layer 1*/
	ctx.beginPath();
	ctx.moveTo(30,35);
	ctx.lineTo(170,35);
	ctx.arc(170,55,20,5,0);
	ctx.lineTo(190,130);
	ctx.arc(170,140,20,0,1.5);
	ctx.lineTo(40,160);
	ctx.arc(30,140,20,1.5,3);
	ctx.lineTo(10,60);
  ctx.arc(30,55,20,3.5,4.5);
  ctx.closePath();
	ctx.fillStyle = "#3C4548";
	ctx.fill();

/*Layer 2*/
  ctx.beginPath();
	ctx.moveTo(30,40);
  ctx.lineTo(120,40);
  ctx.lineTo(120,155);
  ctx.lineTo(35,155);
  ctx.arc(33,137,18,1.5,3);
  ctx.lineTo(15,55);
  ctx.arc(34,59,20,3.5,4.5);
  ctx.closePath();
	ctx.fillStyle = "#303638";
	ctx.fill();

/*Layer 3*/
  ctx.beginPath();
  ctx.moveTo(125,60);
  ctx.lineTo(180,60);
  ctx.lineTo(180,95);
  ctx.lineTo(125,95);
  ctx.closePath();
  ctx.fillStyle = "#E89C17";
	ctx.fill();

/*Layer 4*/
  ctx.beginPath();
  ctx.arc(135, 120, 13, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "#303638";
	ctx.fill();

/*Layer 5*/
  ctx.beginPath();
  ctx.arc(170, 120, 13, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "#303638";
	ctx.fill();

/*Layer 5*/
  ctx.beginPath();
  ctx.arc(152, 145, 8, 0, 2 * Math.PI); 
  ctx.closePath();
  ctx.fillStyle = "#303638";
	ctx.fill();