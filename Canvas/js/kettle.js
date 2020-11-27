var canvas = document.getElementById("kettle");
	var ctx = canvas.getContext("2d");

/*Layer 1*/
  ctx.beginPath();
	ctx.moveTo(40,180);
  ctx.lineTo(40,70);
  ctx.lineTo(25,50);
  ctx.arc(30,50,5,3,4.5);
  ctx.lineTo(180,44);
  ctx.arc(180,54,10,5,0);
  ctx.lineTo(190,120);
  ctx.lineTo(175,120);
  ctx.lineTo(175,60);
  ctx.lineTo(160,60);
  ctx.lineTo(160,170);
  ctx.arc(150,180,10,0,1.5);
  ctx.lineTo(50,190);
  ctx.arc(50,180,10,1.5,3);
  ctx.closePath();
	ctx.fillStyle = "#BDC3C2";
	ctx.fill();

/*Layer 2*/
  ctx.beginPath();
  ctx.moveTo(93,160);
  ctx.lineTo(93,70);
  ctx.quadraticCurveTo(100,63, 107, 70);
  ctx.lineTo(107,160);
  ctx.quadraticCurveTo(100,167, 93, 160);
  ctx.closePath();
	ctx.fillStyle = "white";
	ctx.fill();

/*Line 1*/
  ctx.beginPath();
  ctx.moveTo(40,175);
  ctx.lineTo(160,175);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#333332";
  ctx.stroke();

/*Line 2*/
  ctx.beginPath();
  ctx.moveTo(100,80);
  ctx.lineTo(107,80);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#333332";
  ctx.stroke();

/*Line 3*/
  ctx.beginPath();
  ctx.moveTo(100,95);
  ctx.lineTo(107,95);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#333332";
  ctx.stroke();

/*Line 4*/
  ctx.beginPath();
  ctx.moveTo(100,110);
  ctx.lineTo(107,110);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#333332";
  ctx.stroke();

/*Line 5*/
  ctx.beginPath();
  ctx.moveTo(100,125);
  ctx.lineTo(107,125);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#333332";
  ctx.stroke();

/*Line 6*/
  ctx.beginPath();
  ctx.moveTo(100,140);
  ctx.lineTo(107,140);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#333332";
  ctx.stroke();

/*Line 7*/
  ctx.beginPath();
  ctx.moveTo(100,155);
  ctx.lineTo(107,155);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#333332";
  ctx.stroke();