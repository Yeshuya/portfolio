<?php
$page = (isset($_GET['page']) && $_GET['page'] != '') ? $_GET['page'] : '';
$module = (isset($_GET['module']) && $_GET['module'] != '') ? $_GET['module'] : '';
?>

<!DOCTYPE html>
<html>
    <head>
        <title> My PortFolio </title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
            body{
                margin: 0;
            }
            .header {
                height: 100px;
                width: 100%;
                padding-top: 0;
                margin: 0;
                background-color: white;
                font-family: "Staatliches";
                text-align: center;
                font-size: 78px;
                color: #183c64;
            }
            .topnav_container{
                width: 100%;
            }
            .content{
                width: 100%;
                min-height: 560px;
                margin: 0;
            }
            .topnav {
                overflow: hidden;
                background-color: #183c64;
                width:  100%;
            }
            .topnav a {
                float: left;
                display: block;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
                font-size: 25px;
                width: 474.4px;
                font-family: "Staatliches";
            }
            .topnav a:hover {
                background-color: white;
                color: #183c64;
            }
            .active {
                background-color: #eb2227;
                color: white;
            }
            .topnav .icon {
                display: none;
            }
            .footer{
                font-family: "Staatliches";
                padding: 5px;
                background-color: #183c64;
                width: 99.5%;
                margin-top: 20px;
                font-size: 30px;
            }
            .footer a{
                color: white;
            }
            .footer p{
                color: white;
            }
        </style>
    </head>
    <body>
        <a href="index.php?page=Home" style="text-decoration: none;">
            <div class="header"> My Portfolio </div>
        </a>
        <div class="topnav_container">
			<div class="topnav">
				<a href="index.php?page=css"> CSS </a>
				<a href="index.php?page=svg"> SVG </a>
				<a href="index.php?page=canvas"> CANVAS </a>		
			</div>
        </div>
        <div class="content">
			<?php
				switch ($page)
				{
				    case 'css':
					include ('css.php');
					break;
				    case 'svg':
					include ('svg.php');
					break;
				    case 'canvas':
					include ('canvas.php');
						break;
				}
			?>	
        </div>	
        <div class="footer">
			<p><center style="font-size: 20 px; color: white"><a href="https://drive.google.com/file/d/1RjhRi8Nrz9kWE077ENEbAhuzmR-ellQA/view?usp=sharing" target="_blank"> GITHUB LINK </a></center></p>
            <p><center style="font-size: 20 px; color: white">PANGANIBAN, JOSHUA I. </center></p>
            <center style="color: white">BSIT3-A</center></p>
        </div>	
    </body>
</html>
